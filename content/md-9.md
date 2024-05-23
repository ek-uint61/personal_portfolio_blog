---
title: "Deneme Baslik -7"
subtitle: "Deneme Alt Baslik -7"
author: "Emre Kalayci"
date: "Aug 17, 2023"
tags:
  - AWS
  - Cloud computing
  - Deneme
  - Tech
  - Deneme
contentHtml: string;
slug: title-9;
number: 9
category: "Embedded Software"
image: "../postDataImg11.png"
---

* Fonksiyonlar belirli bir görevi yerine getirmek için kullanılan ifadelerdir.
* Her C programının *main* fonksiyonu vardır.
* Fonksiyonların avantajları
	* modülerlik
	* hata ayıklama kolaylığı
	* değiştirilebilirlik 
	* sürdürülebilirlik
* Fonksiyonlar kod fazlalığını azaltır.


*C'de tüm çalıştırılabilen ifadeler fonksiyonun içinde olmalıdır.*



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

#### C'den Fonksiyon Tanımlama

![[Pasted image 20240313165430.png | 400]]

Fonksiyon prototipi (delacration) => veri_tipi &&&& fonksiyon_adı &&&& (parametreleri)

###### Girdi argümanı olmayan main fonksiyon tanımlama

![[Pasted image 20240313165551.png | 200]]
###### 2 argümanlı fonksiyon (komut satırı argümanları)
* Bu tanım genellikle gömülü sistemlerde kullanılmaz çünkü gömülü sistemlerde komut satırı argümanı bulunmaz.


![[Pasted image 20240313165833.png | 300]]


--------------

* "main" yalnızca 0 veya 2 argüman alır.
* C'de "main()", bir programın başlangıç ve bitiş noktası olarak işlev gören özel bir fonksiyondur.
* "main()" fonksiyonu, bir programın başarısını veya başarısızlığını göstermek için program durumunu döndürür. 0 başarıyı, sıfır olmayan bir değer ise hata durumunu gösterir. ===> *return 0*
* "main()" fonksiyonu, standartlara uygun olarak (C89 ve sonrası) çağıran sürece bir tamsayı değeri döndürmelidir.  *int main()*

```javascript


void function_add_numbers(int a, int b, int c);
# prototip fonksiyonu çağırmamız gerekiyor.

int main () {
	function_add_numbers(10,15,25);

	int valueA = 90, valueB = 70;
	function_add_numbers(valueA, valueB, 50);

	return 0;
}


void function_add_numbers(int a, int b, int c) {
	int sum;
	sum = a + b + c;
	printf("Sum: %d\n", sum);
}

```


------------

### Function Prototype (Declaration)

* C de fonksiyonlar kullanılmadan önce bildirilirler.
* Prototip, derleyicinin geri dönüş veri tipi, adı ve argümanları hakkında bilgisi olmasını sağlar.


```javascript
*********      main.c

#include <stdio.h>

void addition (int num1, int num2);
void subtraction (int num1, int num2);
void multiplication (int num1, int num2);
void division (int num1, int num2);

int main()
{
    addition(10,10);
    subtraction(10,10);
    multiplication(10,10);
    division(10,10);   
    
    return 0;
}


***************** math.c


#include <stdio.h>

void addition (int num1, int num2) {
    int result = num1 + num2;
    printf("result = %d\n", result);
}

void subtraction (int num1, int num2) {
    int result = num1 - num2;
    printf("result = %d\n", result);
}

void multiplication (int num1, int num2) {
    int result = num1 * num2;
    printf("result = %d\n", result);
}

void division (int num1, int num2) {
    int result = num1 / num2;
    printf("result = %d\n", result);
}

```


-----------------


##### bu sefer void fonksiyondan değil  retrun kullanarak
bu geri dönen veri tipleri int - char - pointer vs... olabilir.....
```javascript

#include <stdio.h>

int addition (int num1, int num2) {
	int result = num1 + num2;
	return result;
}
int subtraction  (int num1, int num2) {
	int result = num1 - num2;
	return result;
}
int multiplication (int num1, int num2) {
	int result = num1 *num2;
	return result;
}
int division (int num1, int num2) {
	int result = num1 / num2;
	return result;
}



#include <stdio.h>
int addition (int num1, int num2);
int subtraction (int num1, int num2);
int multiplication (int num1, int num2);
int division (int num1, int num2);

int main () {
	int add = addition(10, 20);
	int sub = subtraction(50, 99);
	int multi = multiplication(50, 7);
	int div = division(12, 2);
	
	printf("add: %d, sub: %d, multi: %d, div: %d\n", add, sub, multi, div);

	return 0;
}


```


-----------------------------------------------------



![[Pasted image 20240313180917.png | 400]]

```javascript
---------------------- main.c -------------------
#include <stdio.h>
#include "math.h"

int main () {

	printf("Add: %X\n", math_add(0x0FFF1111 , 0x0FFF1111 ));
	printf("Mul: %I64\n", math_mul(0x0FFF1111 , 0x0FFF1111 ));
	printf("Div: %0.2f\n", math_div(60, 20));
	return 0;
}
---------------------- math.c -------------------

int math_add(int num1, int num2) {
	return num1 + num2;
}
int math_sub(int num1, int num2) {
	return num1 - num2;
}
long long int math_mul(int num1, int num2) {
	return (long long int) num1 * num2;
}
float math_div(int num1, int num2) {
	return (float) num1 / num2;
}

---------------------- math.h ------------------->



int math_add(int num1, int num2);
int math_sub(int num1, int num2;
long long int math_mul(int num1, int num2);
float math_div(int num1, int num2);

#endif /* MATH_H_ */ 

=> bu yapı önişlemci sembolünün tanımlanıp tanımlanmadığını kontrol eder

```

```javascript
=> header file, math daki tüm fonksiyonlar tanımlanır ve prototipler yazılır.
=> IDE bu makroları otomatik ekler,

=> #ifndef, #define ... "ön işlemci direktifleri" => include guard yapısı



#ifndef MATH_H_ 
#define MATH_H_   
{

// bu alan genellikle
*genel yapı, 
*fonksiyon prototipleri,
*makrolar
ve diğer yapılar içerir.

}

#endif //MATH_H_
```


--------------


#### Type Casting

**Tip Dönüşümü Nedir?** 
	Tip dönüşümü, bir değişkenin veya verinin bir veri türünden diğerine dönüştürülmesi işlemidir.

* **Yüksek Veri Türünden Düşük Veri Türüne Dönüşümde Bilgi Kaybı:**
	 yüksek bir veri türünün daha düşük bir veri türüne dönüştürüldüğünde verinin kırpılacağını belirtmektedir. Örneğin, bir ondalık sayıyı tam sayıya dönüştürmek, ondalık kısmın kesilerek sadece tam kısmın alınması anlamına gelir.

*2 tür tip dönüşümü vardır.-*
1- Compailer'ın yaptığı type casting
2- programcının yapıtğı type casting


```javascript

#include <stdio.h>

int main (void) {

	unsigned char data1 = 0x01 + 0x0089;  // burdaki toplam 1 + 137 = 138 olur yani
	                                     // unsigned char'ın aralığında yer alır.
	                                     // yani compailer otomatik type casting yapar.
	                                     // veri kaybı yoktur.
	unsigned char data = (unsigned char) (0x87 + 0xFF00);  
	                                     // programcının yaptığı type casting
	// float result = 80 / 3;  => kesir kısmı kaybolur
	float resut = (float) 80 / 3;

	printf("Data: %u result: %f\n", data, result);
	return 0;
}

```



```javascript
unsigned char data = 0x1FFFFFFFA0B0 + 0x1245; 

sağ taraf 6 byte ve 4 byte dır.= long long int

```