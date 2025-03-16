## 🚀 Memindahkan Profile Brave ke Drive D dengan Symbolic Link (mklink)

### 📂 1️⃣ Pindahkan Folder Brave ke Drive D

1. **Tutup Brave** sepenuhnya.
2. **Buka lokasi Brave User Data**
   - Tekan **`Win + R`**, lalu ketik:
     ```
     %LOCALAPPDATA%\BraveSoftware\
     ```
   - Tekan **Enter**.
3. **Pindahkan seluruh folder "Brave-Browser" ke Drive D:**
   - Cut dan Paste folder **Brave-Browser** ke lokasi baru, misalnya:
     ```
     D:\Data\Brave-Browser
     ```

---

### 🔗 2️⃣ Buat Symbolic Link (mklink)

1. **Buka Command Prompt sebagai Administrator**
   - Tekan **`Win + S`**, ketik **"cmd"**, lalu pilih **Run as administrator**.
2. **Jalankan perintah mklink** untuk membuat symbolic link:
   ```
   mklink /J "%LOCALAPPDATA%\BraveSoftware\Brave-Browser" "D:\Data\Brave-Browser"
   ```
3. **Tekan Enter**. Jika berhasil, akan muncul pesan seperti:
   ```
   Junction created for C:\Users\NamaPengguna\AppData\Local\BraveSoftware\Brave-Browser <<===>> D:\Data\Brave-Browser
   ```

---

### 🏁 3️⃣ Jalankan Brave Seperti Biasa

Sekarang Brave akan membaca semua data dari **D:\Data\Brave-Browser**, tetapi tetap berfungsi seolah-olah masih di **AppData**.

---

## ✅ Keuntungan

✔ **Menghemat ruang di drive C**  
✔ **Memindahkan semua profile, cache, extension, history, bookmark, dll.**  
✔ **Brave tetap berjalan normal tanpa modifikasi tambahan**

💡 **Catatan:** Jika ingin mengembalikan seperti semula, cukup hapus symbolic link dan pindahkan kembali folder **Brave-Browser** ke lokasi aslinya.

---

## 🚀 Menjalankan Script Login di Brave dan Membuat Shortcut

1. **Buat folder** di dalam **`D:\Data\Brave-Browser`** dengan nama **`Shortcuts`**.
2. **Masukkan daftar email** Anda pada file **`gmail.txt`**.
3. **Instal dependensi dan jalankan script:**
   - Buka Command Prompt atau Terminal di lokasi script.
   - Jalankan perintah berikut:
     ```
     npm install
     ```
   - Setelah instalasi selesai, jalankan script dengan perintah:
     ```
     node brave.js
     ```

🚀 **Sekarang script akan berjalan dan membuat shortcut sesuai kebutuhan!**
