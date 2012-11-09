require 'sinatra'

get '/' do
  @title = 'Home'
  erb :home
end

get '/options' do
  @title = 'Options'
  erb :options
end

get '/faqs' do
  @title = 'FAQs'
  erb :faqs
end

get '/examples' do
  @title = 'Examples'
  erb :examples
end

get '/examples/:title' do
  @title = 'Examples'
  erb :"examples/#{params[:title]}"
end