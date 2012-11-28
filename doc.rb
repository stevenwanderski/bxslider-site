# This loop is used to generate a Markdown version of the slider config options

<% @options.each do |cat, cat_vals| %>
###<%= cat %>

<% cat_vals.each do |option, option_vals| %>
**<%= option %>**  
<%= option_vals['desc'] %>

<% if option_vals['default'] %>
```
default: <%= option_vals['default'] %>  
options: <%= option_vals['options'] %>
<% if option_vals['arguments'] %>
arguments:  
<% option_vals['arguments'].each do |arg, arg_value| %>
  <%= arg %>: <%= arg_value %>
<% end %>
<% end %>
```
<% elsif option_vals['example'] %>
```
example:  
<%= option_vals['example'] %>  
```
<% end %>

<% end %>
<% end %>