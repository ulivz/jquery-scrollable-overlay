# jquery-scrollable-overlay

This plugin doesn't care the implementation of your overlay, it only does one thing: when your popup overlay is scrollable, it disables the background scroll anyway.

The key is that this lib is also compatible with hateful **iOS** devices.

# Usage

This library is not published to NPM, you can use it directly:

```html
<script src="https://rawgit.com/ulivz/jquery-scrollable-overlay/master/index.js"></script>
```

```js
const $overlay = $('/* You overlay selector */')
$overlay.scrollableOverlay() // Use this plugin.

$openIcon.on('click', () => $overlay.trigger('show')) // call when opening your overlay.
$clostIcon.on('click', () => $overlay.trigger('close')) // call when closing your overlay.
```

> Check out the online demo: http://v2js.com/jquery-scrollable-overlay/


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**jquery-scrollable-overlay** © [ulivz](https://github.com/ULIVZ), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by ulivz with help from contributors ([list](https://github.com/ULIVZ/jquery-scrollable-overlay/contributors)).

> [github.com/ulivz](https://github.com/ulivz) · GitHub [@ulivz](https://github.com/ULIVZ)