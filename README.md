# yacdn.org

[![Build Status](https://travis-ci.org/ovsoinc/yacdn.org.svg?branch=master)](https://travis-ci.org/ovsoinc/yacdn.org)
[![Coverage Status](https://coveralls.io/repos/github/ovsoinc/yacdn.org/badge.svg?branch=master)](https://coveralls.io/github/ovsoinc/yacdn.org?branch=master)
[![License](https://img.shields.io/badge/license-AGPLv3-blue.svg?label=license)](https://github.com/Storj/ovsoinc/yacdn.org/blob/master/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/ovsoinc/yacdn.org.svg)](https://github.com/ovsoinc/yacdn.org/graphs/contributors)

#### How to Use:
```
https://yacdn.org/serve/<uri>
```

#### Example
```
https://yacdn.org/serve/http://meowbaari.com/wp-content/uploads/2016/06/1464933654_cat_sleep.png
```
![https://yacdn.org/serve/http://meowbaari.com/wp-content/uploads/2016/06/1464933654_cat_sleep.png](https://yacdn.org/serve/http://meowbaari.com/wp-content/uploads/2016/06/1464933654_cat_sleep.png)

#### Embeddable Script
Paste this into your browser console to replace all images.
```javascript
<script>
document.addEventListener('ready', function() {
    var imgs = document.getElementsByTagName("img");
    for (var i = 0, l = imgs.length; i < l; i++) {
        imgs[i].src = `https://yacdn.org/serve/${imgs[i].src}`;
    }
});
</script>
```
