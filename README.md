# tauri-vite-vue

(🧪 WIP) Vite + Vue Starter for [Tauri](https://tauri.app/).

> Preview: <https://tauri-vite-vue.pages.dev/>

## Prerequisites

> Windows/macOS/Linux require different environments, but [Rust](https://www.rust-lang.org/) and [Node.JS](https://nodejs.org/) are needed.

More info see [Prerequisites | Tauri](https://tauri.app/v1/guides/getting-started/prerequisites).

## Try

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/YunYouJun/tauri-vite-vue/generate)

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit YunYouJun/tauri-vite-vue my-tauri-app
cd my-tauri-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change `tauri.bundle.identifier` value in `src-tauri/tauri.conf.json`
- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the icons in `src-tauri`
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

```bash
# run it and visit http://localhost:1420
pnpm dev

# run it in tauri
# RUST_BACKTRACE=1 pnpm tauri dev
pnpm tauri dev
```

#### Android

```bash
# https://tauri.app/start/prerequisites/#android
export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"
# custom
# export JAVA_HOME="/Users/yunyou/Applications/Android Studio.app/Contents/jbr/Contents/Home"
export ANDROID_HOME="$HOME/Library/Android/sdk"
export NDK_HOME="$ANDROID_HOME/ndk/$(ls -1 $ANDROID_HOME/ndk)"

rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android

# dev
pnpm tauri android init
pnpm tauri android dev
```

#### iOS

```bash
# fist
pnpm tauri ios init

# run
pnpm tauri ios dev
```

### Build

```bash
# Build Tauri App, find it below
pnpm tauri build

# You can use `pnpm build` to build website.
```

- Windows `.msi`: `src-tauri/target/release` (only be created on Windows)
- macOS `.dmg`: `src-tauri/target/release/bundle/dmg` (only be created on macOS)
- Linux(Debian) `.deb`: `src-tauri/target/release` (only be created on Linux)

What to build Cross-Platform installer?

Try GitHub Actions! (Todo)

## Todo

- [ ] Release by GitHub Actions [tauri-apps/tauri-action](https://github.com/tauri-apps/tauri-action#creating-a-release-and-uploading-the-tauri-bundles)
- [ ] ...

## Thanks

- [Tauri](https://github.com/tauri-apps/tauri)
- [Vite](https://github.com/vitejs/vite)
- [Vue](https://github.com/vuejs/core)
- [Vitesse](https://github.com/antfu/vitesse)
