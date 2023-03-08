# Soda
A blueprint for authentication UIs based on Supabase in plain JavaScript

## Getting started
The following steps will get you up and running with Soda.


## Application structure

```
+-- soda_app
|   +-- globals
|   |   +-- scripts
|   |   |   +-- init
|   |   |   +-- auth
|   |   +-- styles
|   |   +-- fonts
|   |   +-- icons
|   +-- components
|   |   +-- header
|   |   +-- footer
|   |   +-- navigation
|   |   +-- sidebar
|   |   +-- modal
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
|   +-- style_guide
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
