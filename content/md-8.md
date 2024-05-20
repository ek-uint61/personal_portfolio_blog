---
title: "Deneme Baslik -8"
subtitle: "Deneme Alt Baslik -8"
author: "Emre Kalayci"
date: "Aug 17, 2023"
tags:
  - AWS
  - Cloud computing
  - Deneme
  - Tech
  - Deneme
contentHtml: string;
slug: title-8;
number: 8
---

q*Cross Compailer* => host (ana) makina da çalışır fakat farklı makinalar için dosya üretebilir.
yani windows üzerine yazılmış ve derlenen programı linux üzerinde de derleyebilme olayıdır.

![[Pasted image 20240316224431.png | 400]]

1. **.efl (Executable and Linkable Format)**:    
    - .efl dosya uzantısı, yürütülebilir ve bağlanabilir bir dosya biçimini ifade eder.
    - Bu dosya biçimi, genellikle ARM ve diğer gömülü sistemlerde kullanılan kodu depolamak için kullanılır.
2. **.bin (Binary)**:    
    - .bin dosya uzantısı, ikili verileri depolayan bir dosya biçimini ifade eder.
    - Programların ikili biçimde kaydedildiği ve genellikle bilgisayar veya mikrodenetleyici tarafından doğrudan yürütülebilecek bir şekilde depolandığı bir dosya türüdür.
    - Genellikle, mikrodenetleyicilerdeki program kodunu veya veriyi saklamak için kullanılır.
3. **.hex (Intel HEX)**:    
    - .hex dosya uzantısı, Intel HEX dosya biçimini ifade eder.
    - Intel HEX dosya biçimi, ikili verileri ASCII karakterlerle temsil eden bir dosya biçimidir. Bu format genellikle programlama ve mikrodenetleyici alanında kullanılır.
    - HEX dosyaları, mikrodenetleyiciye veya FPGA'ya program yüklemek gibi işlemlerde kullanılır. Yüksek seviyeli bir dilde yazılmış bir programın makine koduna çevrilmiş hali, HEX dosyasında saklanabilir ve bu dosya daha sonra hedef cihaza yüklenir.
    
=> müşteriye vermek için .bin ve .hex kullanılır.
=> biz .elf kullanacağız. çünkü .bin ve .hex de debuggin yapılamaz.