# NHẬP MÔN LẬP TRÌNH - BHTCNPM

_Lưu ý:_ Em luôn để relevant resources phía dưới mỗi chương ạ.

---

## Lý thuyết chương I: Các khái niệm cơ bản

---

### 1. Cú pháp cơ bản:

#### 1.1. Cú pháp cơ bản:

`Sử dụng lại cái bảng trong mục này`

```cpp
#include <iostream> // Tiền xử lí

int main() // Chương trình chính
{
    std::cout << "Hello World"; // Nội dung hàm
    return 0;
}
```

#### 1.2. Language Processor (Language Translator):

- **Language Processors** (hay **Language Translator**) là một chương trình máy tính giúp chuyển mã nguồn từ một ngôn ngữ lập trình nhất định sang một loại ngôn ngữ khác hoặc ngôn ngữ máy (thường được biết đến như mã nguồn đối tượng - `object code`).

- **Sự giống nhau giữa các Translator:** Đều là những phần mềm dùng để dịch mã nguồn được viết ở ngôn ngữ bậc cao thành ngôn ngữ bậc thấp, giúp máy tính có thể hiểu và thực thi được chương trình.

- **Sự khác nhau:**

| Tiêu chí           | Compiler (Trình biên dịch)                                                | Interpreter (Trình thông dịch)                                | Assembler (Trình dịch hợp ngữ)                               |
| :----------------- | :------------------------------------------------------------------------ | :------------------------------------------------------------ | :----------------------------------------------------------- |
| **Cách hoạt động** | Dịch **toàn bộ** mã nguồn cùng một lúc thành mã máy trước khi chạy.       | Dịch và thực thi **từng dòng** lệnh một trong quá trình chạy. | Dịch ngôn ngữ Assembly (hợp ngữ) sang ngôn ngữ máy.          |
| **File đầu ra**    | Tạo ra file trung gian (object file) hoặc file thực thi độc lập (`.exe`). | Không tạo ra file thực thi trung gian.                        | Tạo ra object file.                                          |
| **Thời gian**      | Quá trình dịch (build) chậm, nhưng tốc độ chạy (run) rất nhanh.           | Tốc độ chạy chậm hơn vì phải dịch liên tục trong lúc chạy.    | Tốc độ dịch và chạy đều rất nhanh (vì gần với ngôn ngữ máy). |
| **Ví dụ**          | C++, C, Java                                                              | Python, JavaScript                                            | Assembly                                                     |

_Lưu ý_: Quá trình dịch và Quá trình chạy được đề cập ở trên là khác nhau (chi tiết xem mục 1.3)

<details>
    <summary>Tại sao cần dùng tới Language Translator?</summary>

- Vì ngôn ngữ máy được cấu tạo từ các bit 0 và 1 khiến cho việc đọc hiểu và giao tiếp với máy tính của con người trở nên cực kỳ khó khăn.
- Vì vậy, con người tạo ra Language Translators để dịch những ngôn ngữ bậc cao (ngôn ngữ thân thiện với con người) thành mã máy (ngôn ngữ máy tính có thể hiểu được), biến việc lập trình trở nên dễ dàng và hiệu quả hơn.
  </details>

#### 1.3. Quá trình dịch của C++ (Compiler, Linker & Libraries):

Đối với các file `.cpp`, hệ thống sử dụng C++ Compiler. Quá trình để biến file chứa mã nguồn thành một chương trình chạy được trải qua các bước quan trọng sau:

1. **Kiểm tra cú pháp:** Compiler đi qua các dòng code tuần tự. Nếu phát hiện sai sót, chúng sẽ tự động báo lỗi cùng với dòng có lỗi tương ứng, lập trình viên phải sửa lỗi (`debug`) thì chương trình mới chạy tiếp được.

    _(try it yourself)_

    ```cpp
    #include <iostream>

    int main**() // Lỗi cú pháp ở đây
    {
        std""cout << "Hello World"; // Lỗi cú pháp ở đây
        return 0;
    }
    ```

2. **Biên dịch (Compiling):** Trình biên dịch sẽ dịch file mã nguồn thành những chỉ dẫn bằng ngôn ngữ máy. Những chỉ dẫn này được lưu trữ trong các file trung gian gọi là `object file` (`.obj` hoặc `.o`).

3. **Liên kết (Linking):** Đây là lúc **Linker** (Trình liên kết) vào việc. Một chương trình C++ thường bao gồm nhiều file `.cpp`. Linker sẽ gom tất cả các `object files` này lại với nhau.

4. **Thư viện (Libraries):** Linker cũng đồng thời liên kết các `object files` của bạn với các Thư viện C++ (ví dụ: thư viện `<iostream>` chứa code đã được dịch sẵn để in chữ ra màn hình). Kết quả cuối cùng của bộ Linker là tạo ra một file thực thi duy nhất (ví dụ: `main.exe`).

_Lưu ý:_

- Phân biệt quá trình biên dịch và quá trình thực thi:
    - **Quá trình biên dịch (Compile Time)**: Là quá trình Trình biên dịch (Compiler) kiểm tra lỗi cú pháp và dịch toàn bộ file mã nguồn (`.cpp`) thành ngôn ngữ máy (tạo ra file thực thi `.exe`). Nếu code sai cú pháp, chương trình sẽ báo lỗi ngay tại bước này (Compile-time error).
    - **Quá trình thực thi (Runtime)**: Là lúc máy tính (CPU) chính thức chạy file `.exe` vừa được tạo ra để thực hiện các chỉ dẫn của chương trình. Các lỗi phát sinh trong lúc phần mềm đang chạy (ví dụ: lỗi chia một số cho 0, lỗi tràn bộ nhớ) được gọi là lỗi Runtime (Runtime error).

---

### 2. Cú pháp cơ bản:

#### 2.1. Cấu trúc chương trình C++ cơ bản:

`Sử dụng lại bảng Cấu trúc chương trình sẵn có trong mục này`

_(try it yourself)_

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello World";
    return 0;
}
```

### Relevant Resources:

[Translator](https://www.geeksforgeeks.org/computer-science-fundamentals/language-processors-assembler-compiler-and-interpreter/)

[Machine Language](https://www.geeksforgeeks.org/computer-organization-architecture/what-is-machine-language/)

[Introduction to compiler](https://www.learncpp.com/cpp-tutorial/introduction-to-the-compiler-linker-and-libraries/)

## Lý thuyết chương II:

## Lý thuyết chương II:

## Relevent Resources:

[learncpp.com](https://www.learncpp.com/cpp-tutorial/introduction-to-programming-languages/)

[w3school.com](https://www.w3schools.com/cpp/default.asp)

[geeksforgeeks.org](https://www.geeksforgeeks.org/cpp/c-plus-plus/)

#### 1.1. Language Processor (Language Translator):

- **Language Processors** (hay Language Translator) là một chương trình máy tính giúp chuyển mã nguồn từ một ngôn ngữ lập trình nhất định sang một loại ngôn ngữ khác hoặc ngôn ngữ máy (thường được biết đến như mã nguồn đối tượng - `object code`).

- **Sự giống nhau giữa các Translator:** Đều là những phần mềm dùng để dịch mã nguồn được viết ở ngôn ngữ bậc cao thành ngôn ngữ bậc thấp, giúp máy tính có thể hiểu và thực thi được chương trình.

- **Phân biệt sự khác nhau:**

| Tiêu chí           | Compiler (Trình biên dịch)                                                | Interpreter (Trình thông dịch)                                | Assembler (Trình dịch hợp ngữ)                               |
| :----------------- | :------------------------------------------------------------------------ | :------------------------------------------------------------ | :----------------------------------------------------------- |
| **Cách hoạt động** | Dịch **toàn bộ** mã nguồn cùng một lúc thành mã máy trước khi chạy.       | Dịch và thực thi **từng dòng** lệnh một trong quá trình chạy. | Dịch ngôn ngữ Assembly (hợp ngữ) sang ngôn ngữ máy.          |
| **File đầu ra**    | Tạo ra file trung gian (object file) hoặc file thực thi độc lập (`.exe`). | Không tạo ra file thực thi trung gian.                        | Tạo ra object file.                                          |
| **Thời gian**      | Quá trình dịch (build) chậm, nhưng tốc độ chạy (run) rất nhanh.           | Tốc độ chạy chậm hơn vì phải dịch liên tục trong lúc chạy.    | Tốc độ dịch và chạy đều rất nhanh (vì gần với ngôn ngữ máy). |
| **Ví dụ**          | C++, C, Java                                                              | Python, JavaScript                                            | Assembly                                                     |

<details>
    <summary>Tại sao cần dùng tới Language Translator?</summary>

- Vì ngôn ngữ máy được cấu tạo từ các bit 0 và 1 khiến cho việc đọc hiểu và giao tiếp với máy tính của con người trở nên cực kỳ khó khăn.
- Vì vậy, con người tạo ra Language Translators để dịch những ngôn ngữ bậc cao (ngôn ngữ thân thiện, gần với tiếng Anh) thành mã máy (ngôn ngữ máy tính có thể hiểu được), biến việc lập trình trở nên dễ dàng và hiệu quả hơn.
  </details>

#### 1.2. Quá trình dịch của C++ (Compiler, Linker & Libraries):

Đối với các file `.cpp`, hệ thống sử dụng C++ Compiler. Quá trình để biến file text thành một chương trình chạy được trải qua các bước quan trọng sau:

1. **Kiểm tra cú pháp (Syntax Checking):** Compiler đi qua các dòng code tuần tự. Nếu phát hiện sai sót, chúng sẽ tự động báo lỗi cùng với dòng có lỗi tương ứng, lập trình viên phải sửa lỗi (`debug`) thì chương trình mới chạy tiếp được.

    ![Ví dụ minh họa](image.png 'Ví dụ minh họa')

    _(try it yourself - Ví dụ cố tình viết sai cú pháp để minh họa báo lỗi)_

    ```cpp
    #include <iostream>

    int main()
    {
        std""cout << "Hello World"; // Lỗi cú pháp ở đây
        return 0;
    }
    ```

2. **Biên dịch (Compiling):** Trình biên dịch sẽ dịch file mã nguồn thành những chỉ dẫn bằng ngôn ngữ máy. Những chỉ dẫn này được lưu trữ trong các file trung gian gọi là `object file` (`.obj` hoặc `.o`).

3. **Liên kết (Linking):** Đây là lúc **Linker** (Trình liên kết) vào việc. Một chương trình C++ thường bao gồm nhiều file `.cpp`. Linker sẽ gom tất cả các `object files` này lại với nhau.

4. **Thư viện (Libraries):** Linker cũng đồng thời liên kết các `object files` của bạn với các Thư viện C++ (ví dụ: thư viện `<iostream>` chứa code đã được dịch sẵn để in chữ ra màn hình). Kết quả cuối cùng của bộ Linker là tạo ra một file thực thi duy nhất (ví dụ: `main.exe`).

---

### 2. Cú pháp cơ bản:

#### 2.1. Cấu trúc chương trình C++ cơ bản:

`Sử dụng lại bảng Cấu trúc chương trình sẵn có trong mục này`

_(try it yourself)_

```cpp
#include <iostream>

int main()
{
    std::cout << "Here is some text.";
    return 0;
}
```
