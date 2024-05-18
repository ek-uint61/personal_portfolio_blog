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

##### Adress of Variables


&myData => değişkenin bellekteki konum adresini verir.

%p => bellekteki adresi yazmak için format seçicidirç (pointer)


```c
   char a1 = "A";
   printf("adress of variable a1 = %d\n", &a1);
   ```
	 
	 ====> adress of variables a1 = 0x7ffc14901ae => a pointer

A'nın ASCII'si = 65 = 0x41
0x41 = 16x4 + 1 = 65



<a href="http://google.com.au/" rel="some text">![Foo](https://miro.medium.com/v2/resize:fit:828/format:webp/1*pu7IMrbvONgyqmMBfySKWQ.png)</a>


***NOT => Pointer (Memory location adress)'ın boyutu derleyiciye ve donanıma göre değişkenlik gösterir.
ARM Cortex Mx based STM32 Mikrodenetleyicilerde pointer'ın boyutu 4 byte (32 bittir.)

![[Pasted image 20240309170619.png | 300]]

burda, &a1 -> pointer veri tipini temsil ediyor,
yani unsigned long int veri tipindeki değişkene, pointer veri tipindeki değiken atanmaya çalışılıyor.
ve tip uyuşmazlığı oluyor.

Bunu sorunu çözmek için pointer veri tipini, değişkene çeviririz.
(typecasting)

```c
char  a1 = "A";
unsigned long int addressOfa1 = (unsigned long int) &a1;
// &a1 pointer veri tipi => unsigned long int'e çevirilir,
// yani bellekteki adresi unsigned long int'e çevrilir.

printf("Address of Variable = %lu \n", addressOfa1);

```


32 bit mimari için => 4 byte (32 bit)
16 bit mimari için => 2 byte (16 bit)

