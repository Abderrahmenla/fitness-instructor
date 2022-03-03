module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1200,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"backgroundColor":"white","quality":50,"withWebp":false,"withAvif":false,"tracedSVG":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Inbio","short_name":"inbio","theme_color":"#ff014f","background_color":"#ffffff","display":"standalone","scope":"/","start_url":"/","icon":"src/assets/images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"3e198bf3ce171117733d603a5de56b6d"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
