#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// use tauri::menu::MenuBuilder;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        // plugins
        // .plugin(tauri_plugin_cli::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_notification::init())
        // .plugin(tauri_plugin_positioner::init())
        .plugin(tauri_plugin_process::init())
        .plugin(tauri_plugin_shell::init())
        // .plugin(tauri_plugin_updater::Builder::new().build())
        // custom menu
        // .setup(|app| {
        //     let _menu = MenuBuilder::new(app)
        //         .copy()
        //         .paste()
        //         .separator()
        //         .undo()
        //         .redo()
        //         .text("open-url", "Open URL")
        //         .check("toggle", "Toggle")
        //         .icon(
        //             "show-app",
        //             "Show App",
        //             app.default_window_icon().cloned().unwrap(),
        //         )
        //         .build()?;
        //     Ok(())
        // })
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
