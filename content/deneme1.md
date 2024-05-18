---
title: "Getting Started with AWS"
subtitle: "Create an AWS account and set up CLI/SDK access."
author: "Emre Kalayci"
date: "Aug 17, 2023"
tags:
  - AWS
  - Cloud computing
  - Deneme
  - Tech
  - Deneme
contentHtml: string;
slug: daneme1;
---



integer data types ( for signed data) 
- char
- short int    --> short
- int  
- long int     --> long
- long long int --> long long

integer data types ( for unsigned data)
* unsigned char
* unsigned short int
* unsigned int
* unsigned long int
* unsigned long long int




**float:** Genellikle 4 byte (32 bit).    
**double:** Genellikle 8 byte (64 bit).    
**long double:** Genellikle 10 byte veya daha fazla, bu derleyici ve sistem mimarisine bağlıdır.    
**pointer (işaretçi):** Genellikle sistem mimarisine bağlı olarak 4 byte (32 bit) veya 8 byte (64 bit).




--------------

-> Derleyici (GCC) her bir long için 8 byte (64 bit) bellek ayıracaktır.

![[Pasted image 20240301134128.png]]

->XC8 cross compailer için PIC 8 bit microcontrollers

![[Pasted image 20240301134426.png]]


->Armcc corss compailer for 32 bit ARM Based microcontrollers 

![[Pasted image 20240301135014.png]]

* C Standartı farklı veri tiplerine depolama boyutlarını sabitlemez. Sadece min ve max değerler hakkında bilgi verir.
* Örneğin Standart C deki long veri tipi 32 bit ve 64 bit depolama boyutu vardır fakat değişkenin tam boyutu derleyicinin tasarımına bağlıdır. Bazı derleyiciler 32 bit depolama boyutuna sabitlerken bazıları derleyicileri 64 bite sabitler.
* int veri tipi içinde aynı şey geçerlidir bazı compailer 16 bite sabitlerken bazıları 32 bite sabitler.


* (signed veya unsigned) short -> her zaman 2 byte (16 bit) dir.
* (signed veya unsigned) char -> her zaman 1 byte (8 bit) dir.
* (signed veya unsigned) long long -> her zaman 8 byte (64 bit) dir.


---------------------------------

#### Char

* tek bir karakteri (ASCII kodunu) saklamak için kullanılan veri türüdür veya 1 byte signed integer değeri (+ veya -)
* char veri tipi 1 byte bellekte yer kaplar.
* char, sayısal değerlerle karakterleri temsil etmektedir, bu nedenle integer veri tipi olarak kabul edilir.

char range -> -128 to 127 -> bellekte 1 byte yer kaplar.
unsigned char ranger -> 0 to 255 -> bellekte 1 byte yer kaplar.


![[Pasted image 20240301142042.png]]




printf Format Belirleyicileri:
- `%d`: Bir tamsayıyı (int) okumak için.
- `%f`: Bir ondalıklı sayıyı (float) okumak için.
- `%c`: Bir karakteri okumak için.
- `%s`: Bir dizeyi (string) okumak için.
- `%lf`: Çift hassasiyetli ondalıklı sayı (double) okumak için.
- `%x` veya `%X`: Onaltılık sayıyı okumak için.
- `%o`: Sekizlik sayıyı okumak için.

* `%u`: Bu format belirleyici, işaretsiz bir tamsayıyı (unsigned integer) yazdırmak veya okumak için kullanılır.
* `%ld`: Bu format belirleyici, bir uzun tamsayıyı (long integer) yazdırmak veya okumak için kullanılır.




Kullanımları;
```javascript

printf("Total distance from A2C is = `%d` km",distanceA2C);

printf("`%d` is the total distance from A2C = ", distanceA2C);

-----------------

int num; 
float pi; 

printf("Enter an integer: ");
scanf("%d", &num);

printf("Enter a float: ");
scanf("%f", &pi);

```



| 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| --- | --- | --- | --- | --- | --- | --- | --- |
7 -> 8 Bitin işaretlerini belirtmek için kullanılır.
     0 ise pozitif
     1 ise negatif


![[Pasted image 20240301145104.png]]

25 -> 11001  = 00011001
-25'i bulmak için -> 2'ye tümleyeni alınır.

r^n - N => 11100110 - 00011001 = 00011001 - 1 = 00011000
tekrar tümleyeni alınır -> 11100111

= 0xE7 = (231) onluk taban = (11100111) 2 lik taban

| 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 1   | 1   | 0   | 0   | 1   | 1   | 1   |





![[Pasted image 20240301145812.png]]

= 0x19 = 25


##### signed char data type range -128 to 127

Pozitif oldugu durum => So, range is 0 to 127 for +positive data

en küçük durum = 0

| 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |

en büyük durum = 127

| 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0   | 1   | 1   | 1   | 1   | 1   | 1   | 1   |



Negatif oldugu durum => So, range is -1 to -128 for +positive data

en küçük durum = -128

| 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
en büyük durum = -1

| 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 1   | 1   | 1   | 1   | 1   | 1   | 1   |
##### unsigned char data type range 0 to 255

=> işaretsiz olduğuı için 8 bit de verileri saklamak için kullanılır.

en küçük değer = 0

| 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   |
en büyük değer = 255

| 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 1   | 1   | 1   | 1   | 1   | 1   | 1   |


----------------------


#### integer data type => short int (signed) ve unsigned short int

* signed veya unsigned veri tipindeki değişkenler bellekte 2 byte (16 bit) yer kaplar.

![[Pasted image 20240301152044.png]]![[Pasted image 20240301152355.png]]

==> direkt 25'in 2 ye tümleyeni alınır.
= 0xFFE7

![[Pasted image 20240301152855.png]]


##### signed and unsigned short int range calculation

short int -> -32,768 to 32,767
unsigned short int -> 0 to 65535


##### unsigned short int 

![[Pasted image 20240301153108.png]] 



#### integer data type -> int (signed) and unsigned int


* int, 2 byte veya 4 byte bellekte yer kaplar, kullanılan derleyiciye göre değişir.

#### integer data type -> long (signed) and unsigned long 


* long, 4 byte veya 8 byte bellekte yer kaplar, kullanılan derleyiciye göre değişir.


-------------------------


### sizeof

* sizeof operatorü bir değişkenin byte boyutunu bulmak için kullanılır.
* sizeof operatörünün çıktısı farklı makinalarda sonuc farklı olabilir derleyiciye bağlıdır.


![[Pasted image 20240301161127.png]]



```javascript
long long myLongHistory = 900 ;
char size = sizeof(myLongHistory);
printf("%d",size);  /* sonuç = 8 

```



---------------

Değişkenler & Değişken Adlandırma & Tanımlama

- verileri bellekte saklaması için etiken görevi görür.
- değişken adları bellekte saklanmaz, derleyici veri işleme sırasında bellek adresi ile yer değiştirir

- ![[Pasted image 20240309112648.png]]


* değişken adları sadece programcının, programlama kolaylığı için vardır derleme sonrası mevcut değildir.


![[Pasted image 20240309112842.png]]

* Değişken tanımlama bellekte ne kadar alana ihtiyacımız olduğunu bildirmektir.
* Değişten tiği ---- Değişken Adı
* char myExamScore = 25;



##### Değişken Adlandırma Kuralları

* değişken adı 30 karakter den fazla olmamalıdır.
* değişkenler adları -> harfler & rakamlar ve alt çizgiden oluşabilirler.
* ilk harfi rakam olamaz. -> harf veya _ olmalıdır.

![[Pasted image 20240309113605.png]]


***Variable definition vs. declaration => tanımlama & bildirme

Tanımlama => bellekte yer ayırmak üzere talimatlar üretir.
Bildirme => değişkenin var olduğunu ve türüyle birlikte not edilir ancak bu nokta da bellekte yer verilmez.

=> değişken tanımlama aynı zamanda bildirimidir, ancak tüm değişken bilidirimi tanımlama değildir.


***extern keyword;

* bir değişkenin veya fonksiyonun başka bir dosyadan geldiğini ve bu dosyada tanılandığını belirtmek için kullanılır.
* aynı program içinde veya farklı dosyalardaki kodun bir birine bağlanmasına yardımcı olan özelliktir.

. ![[Pasted image 20240309115028.png | 400 ]]


![[Pasted image 20240309115107.png | 400]]

---------

Variable Scopes

-> Local scope variables  -> local'in dışına çıktığında yok olur.
-> Global scpoe variables


default value -> öngörülemez değer (çöp değer);


-------------

