---
layout: post
title: "GitLab got bit: MySQL fails at Rails migrations that work in PostgreSQL"
date: 2014-12-24 17:07:26 +0100
comments: true
author: Job, DZ
---

One day after releasing GitLab 7.6 we had to release a patch. This is how we
got bit by a failing migration and why it was our own fault.

GitLab supports two databases: MySQL and PostgreSQL.

This is what part of them looked like:

```
# DB table
users:
  name: string
  domain: string
  username: string

# Composite index on 2 fields
add_index :users, [:username, :domain]
```

So a user would look like this:

<User1 name: 'John', domain: 'example.com', username: 'john'>  

So index should not allow duplicate values for combination username+domain.

How my migration looked like:

def up  
remove_column :users, :username
remove_column :users, :domain
end  
After I run it on PostgreSQL it just sucessfully removed column.

But MySQL was not so friendly to me. When it tried to remove column it fails with next exception:

Mysql2::Error: Duplicate entry 'example.com' for key 'index_users_on_username_and_domain': ALTER TABLE `users` DROP `username`  
Looks like when it tried to remove username column it decided to rebuild index using only domain column.
But since index is uniq - it does not allow duplicate items.

How to make it works on mysql then? Just remove index before removing column:

def up  
if index_exists?(:users, [:username, :domain])
remove_index :users, [:username, :domain]
end

remove_column :users, :username
remove_column :users, :domain
end  
In this case MySQL will be satisfied and migration will work on both databases :)
