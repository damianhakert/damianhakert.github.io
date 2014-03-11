require 'rubygems'
require 'recurly'
require 'sinatra'
require "sinatra/config_file"

config_file 'config.yml'

Recurly.subdomain      = settings.subdomain
Recurly.api_key        = settings.api_key
Recurly.js.private_key = settings.private_key

# To set a default currency for your API requests:
Recurly.default_currency = settings.default_currency

set :public_folder, File.join(File.dirname(__FILE__), '../public/')

configure do
  set :views, File.join(File.dirname(__FILE__), '../public/subscription/')
end

get '/subscription/basic' do
  @subdomain = Recurly.subdomain
  @default_currency = Recurly.default_currency
  @signature = Recurly.js.sign :subscription => { :plan_code => 'gitlab-enterprise-yearly' }
  erb :basic
end

get '/subscription/standard' do
  @subdomain = Recurly.subdomain
  @default_currency = Recurly.default_currency
  @signature = Recurly.js.sign :subscription => { :plan_code => 'gitlab-standard-yearly-100' }
  erb :standard
end

post '/subscription/success' do
  result = Recurly.js.fetch params[:recurly_token]
  redirect '/subscription/success.html'
end
