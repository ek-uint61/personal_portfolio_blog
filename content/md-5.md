---
title: "Deneme Baslik -4"
subtitle: "Deneme Alt Baslik -4"
author: "Emre Kalayci"
date: "Aug 17, 2023"
tags:
  - AWS
  - Cloud computing
  - Deneme
  - Tech
  - Deneme
contentHtml: string;
slug: title-4;
number: 4
category: "Machine Learning"
image:  "/postDataImg8.png"
---
-> Scope, Visibility ve Lifetime bir değişkenin özellikleridir, *storage classes* belirleyicileri kullanarak bunlar değiştirilebilir.

-> 2 çeşit depolama sınıf vardır

* static
* extern


*NOT*

```javascript

#include <stdio.h>


# burda ki prototip fonksiyon, derleyiciye fonksiyonun varlığını bildirir,
# yani bu fonksiyon ilerleyen kısımlardda kullanılacağını ve nasıl çağırılması gerektiğini söyler.

# Fonksiyon prototipleri, programın daha düzenli ve okunabilir olmasına yardımcı olur ve fonksiyonların doğru kullanılmasını sağlar.
void myFunc(void);
# int counter = 0;
int main() { 
    myFunc();
    myFunc();
    myFunc();
    myFunc();
    
    return 0;
}

void myFunc(void) {
	int counter = 0;
    counter += 1;    
    printf("This function executed %d time(s) \n", counter);    
}


# This function executed %d time(s) 1
# This function executed %d time(s) 1
# This function executed %d time(s) 1
# This function executed %d time(s) 1


	int counter = 0; 
	global değişken olsaydı

# This function executed %d time(s) 1
# This function executed %d time(s) 2
# This function executed %d time(s) 3
# This function executed %d time(s) 4
```

```javascript

=> fakat bu projenin başka dosyasındaki counter değişkeninin değiştirilmesiyle
   değiştirilebilir bu private hale getirmemiz lazım yani değişken özelliğini 
   kaybetmeden kullanılabilsin istiyoruz.

=> program myFunc() dan çıksa bile değişkenin değeri değişmeyecektir.
=> özetle: static kullanılınca, değişken global olarak ele alınır ancak
   myFunc() a özeldir ve myFunc() a geri dönse bile değişmezdir.



#include <stdio.h>

void myFunc(void);

int main () {

	myFunc();
	myFunc();
	myFunc();
	myFunc();

	return 0;
}

void myFunc(void) {
	static int counter = 0;
	counter += 1;

	printf("This function executed %d time(s) \n", counter);
	
}

# This function executed %d time(s) 1
# This function executed %d time(s) 2
# This function executed %d time(s) 3
# This function executed %d time(s) 4

```
	
	
![[Pasted image 20240309193813.png | 300]]

* proje birden fazla source code ile yazılabilir.
* "static" storage classes, görünürlüğü yönetmek için de kullanılabilir.
* değişkenin çeşitli dosyalar arasında kullanılmasını sağlar.


```javascript

>>>>>>>>>>>>>> main.c 

#include <stdio.h>

int privateData;
void file1_func(void);

int main () {
    
    privateData = 100;
    printf("Private Data = %d\n", privateData);
    
    file1_func();
    printf("Private Data = %d\n", privateData);

    return 0;
}

# Private Data = 100
# Private Data = 900

>>>>>>>>>>>>>  file.c

extern int privateData;
void file1_func(void) {
    privateData = 900;
}


==> static değişkenler extern edilmezler ve değiştirilemezler.
```

##### Fonksiyonlarda Storage Classes Kullanımı

```javascript

static void change_system_clock(int system_clock) {
    
    printf("system clock change to = %d\n", system_clock);
    
}

başka scopelarda veya başka dosyalar içersinde bu fonksiyon değiştirilemez.
```


* *Extern* storage classes, bir dosyanın scope dışında tanımlanan global değişkenlere erişmek için kullanılır.
* *Extern* storage classes, bir fonksiyonun, dosyanın scope u dışında olduğu durumlarda da fonksiyon çağrısı olarak kullanılabilir.

* *Extern*, projenin birden fazla dosyalardan oluştuğu durumlarda ve bir dosyada tanımlanan değişkeni diğer dosyadan erişmemizi sağlar.
* Özetle *Extern*, fonksiyonların veya değişkenlerin görünülürlüğünü artırır.




##### ASCII CODES

* American National Standards Institute (ANSI), ANSI C yi geliştirirken aynı zamanda ASCII yi geliştirdi.
* ASCII = American Standard Code for Information *Interchange (Alışveriş)*

* ASCII standartlarında 128 farklı karakter vardır.
* Herhangi bir ASCII karakterini kodlamak için sadece 7 bit gerekir. (sadece *char* veri tipi kullanılabilir.)


![[Pasted image 20240309222058.png | 500]]

![[Pasted image 20240309222202.png | 300]]


```javascript
   char a1 = 'A';
   char a2 = 'p';
   char a3 = 'p';
   char a4 = 'l';
   char a5 = 'e';
   char a6 = ':';
   char a7 = ')';
   
   printf("variables = %c %c %c %c %c %c %c\n", a1, a2, a3, a4, a5, a6, a7);
   printf("ASCII value of variables = %d %d %d %d %d %d %d\n", a1, a2, a3, a4, a5, a6, a7);
```