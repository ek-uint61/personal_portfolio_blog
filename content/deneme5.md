---
title: "Getting Started with AWS"
subtitle: "Create an AWS account and set up CLI/SDK access."
author: "Emre Kalayci"
date: "2020-12-27"

tags:
  - AWS
  - Cloud computing
  - Deneme
  - Tech
  - Deneme
---

![[Pasted image 20240317013214.png |400]]

Build project yaptıktan sonra

- **Preprocessing (Önişleme)**: Kaynak kodun önişlenmesi, önişlemci komutlarının (örneğin, `#include`, `#define`) yerine getirilmesi ve koşul derleme işlemlerinin gerçekleştirilmesidir. Yorum satırlarını kaldırır vs..    (.i)
    
- **Parsing (Ayrıştırma)**: Derleyici, önişlemeye tabi tutulmuş kodu ayrıştırır, syntax hatalarını kontrol eder ve kodun yapısını anlar.
    
- **Producing Object Files (Nesne Dosyalarının Üretilmesi)**: Derleyici, ayrıştırılmış kodu makine diline çevirir ve her kaynak dosya için bir nesne dosyası oluşturur.  
    
- **Linking Object Files (Nesne Dosyalarının Bağlanması)**: Linker, nesne dosyalarını birleştirir, harici bağlantıları tanımlar ve bağlantıları oluşturur.
    
- **Producing File Executable (Çalıştırılabilir Dosyanın Üretilmesi)**: Linkleme işlemi tamamlandıktan sonra, çalıştırılabilir dosya üretilir. Bu dosya, programın çalıştırılabilir kodunu içerir.
    
- **Post Processing of Final Executable (Nihai Çalıştırılabilir Dosyanın Son İşlenmesi)**: Opsiyonel olarak, nihai çalıştırılabilir dosya üzerinde ek işlemler yapılabilir, örneğin hata ayıklama sembolleri eklemek veya dosyayı optimize etmek gibi.

![[Pasted image 20240317014708.png | 500]]


.c (source file) --> preprocessor (.i) --> parser --> code generator (.s) --> Assembler --> .o


----------

![[Pasted image 20240317015142.png | 500]]

örneğin 5 tane *.c* dosyasıdan 5 tane *.o* dosyası oluşturulur ve linker bunu birleştirir.
sonra *.elf* executable + debug edilebilen dosyayı oluşturulur.

=> sonra *.bin ve .hex"* gibi kaynak dosyalarını üretiriz
=> *.bin* executable file
=> *.hex* executable file gibi....



##### Bunların hepsini bizim cross compailerimiz yaparç
=> arm-none-eabi-gcc