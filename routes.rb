require 'sinatra'

@front = false

# ===================================
# ROUTES
# ===================================

get '/' do
  @title = 'jQuery Content Slider'
  @class = 'home'
  @front = true
  erb :home
end

get '/options' do
  @title = 'Options'
  @class = 'options'
  erb :options
end

get '/faqs' do
  @title = 'FAQs'
  @class = 'faqs'
  erb :faqs
end

get '/examples' do
  @title = 'Examples'
  @class = 'examples'
  erb :examples
end

get '/examples/:title' do
  @title = 'Examples'
  @class = 'example-item'
  erb :"examples/#{params[:title]}"
end

get '/about' do
  @title = 'About'
  @class = 'about'
  erb :about
end

# ===================================
# HELPERS
# ===================================

helpers do
  include Rack::Utils
  alias_method :h, :escape_html
end

