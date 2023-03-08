# Soda
A blueprint for authentication UIs based on Supabase in plain JavaScript

## Getting started
The following steps will get you up and running with Soda.

- download the repository
- move to the soda_app folder
- download Supabase with curl https://unpkg.com/@supabase/supabase-js@2.10.0/dist/umd/supabase.js > globals/externals/supabase.js


## Application structure

```
+-- soda_app
|   +-- components
|   |   +-- header
|   |   +-- footer
|   |   +-- navigation
|   |   +-- sidebar
|   |   +-- modal
|   +-- globals
|   |   +-- scripts
|   |   |   +-- sodaapp.js
|   |   |   +-- sodaauth.js
|   |   +-- external
|   |   +-- styles
|   |   +-- fonts
|   |   +-- icons
|   +-- pages
|   |   +-- login
|   |   |   +-- login.html
|   |   |   +-- login.js
|   |   |   +-- login.css
|   |   +-- signup
|   |   +-- forgot_password
|   |   +-- reset_password
|   |   +-- profile
|   |   +-- dashboard
|   +-- styleguide
|   +-- index.html
|   +-- index.js
|   +-- index.css
|   +-- 404.html
```

## Structure and Style Assumptions
- All callable pages are located in the pages or root folder
- Pages are named after their purpose (e.g. login.html), to avoid confusion during development
- All pages, components are using the global scripts and styles as a base


## Soda Development Journal

### March, 08. 2023
- Definition of the application structure
- globals: general scripts, styles, etc. for all pages
- components: small reusable html-elements 
- pages: public html-pages
