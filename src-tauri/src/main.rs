#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use chrono::{Datelike, Local};
use tauri::{AboutMetadata, CustomMenuItem, Menu, MenuItem, Submenu};

struct AppInfo {
    name: String,
    version: String,
    description: String,
    authors: Vec<String>,
    license: String,
    repository: String,
    homepage: String,
}

fn main() {
    tauri::Builder::default()
        // custom menu
        .menu(get_menu())
        .on_menu_event(|event| {
            let menu_item_id = event.menu_item_id();
            event.window().emit("menu-event", menu_item_id).unwrap();
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

pub fn get_menu() -> Menu {
    let app_info = AppInfo {
        name: "Tauri App".to_string(),
        version: "0.1.0".to_string(),
        description: "An example Tauri App".to_string(),
        authors: vec!["YunYouJun".to_string(), "YunLeFun".to_string()],
        repository: "https://github.com/YunYouJun/tauri-vite-vue".to_string(),
        homepage: "https://tauri-vite-vue.pages.dev".to_string(),
        license: "MIT".to_string(),
    };

    let joined_authors = app_info.authors.to_owned().join(", ");

    let about_metadata = AboutMetadata::new()
        .authors(app_info.authors)
        .comments(app_info.description)
        .version(app_info.version)
        .website(app_info.homepage)
        .copyright(format!("{} {}", Local::now().year(), joined_authors))
        .license(app_info.license + &app_info.repository);

    let about_menu = Menu::new().add_native_item(MenuItem::About(app_info.name, about_metadata));

    // file menu
    let open_folder = CustomMenuItem::new("open", "Open Folder").accelerator("CmdOrControl+F");
    let create_item = CustomMenuItem::new("create", "New File").accelerator("CmdOrControl+N");

    let window_menu = Menu::new()
        .add_native_item(MenuItem::Minimize)
        .add_native_item(MenuItem::Zoom)
        .add_native_item(MenuItem::Hide)
        .add_native_item(MenuItem::Quit);

    Menu::new()
        .add_submenu(Submenu::new("About", about_menu))
        .add_submenu(Submenu::new(
            "File",
            Menu::new()
                .add_item(open_folder)
                .add_native_item(MenuItem::Separator)
                .add_item(create_item),
        ))
        .add_submenu(Submenu::new("Window", window_menu))
}
