---
title: "Deneme Baslik -6"
subtitle: "Deneme Alt Baslik -6"
author: "Emre Kalayci"
date: "Aug 17, 2023"
tags:
  - AWS
  - Cloud computing
  - Deneme
  - Tech
  - Deneme
contentHtml: string;
slug: title-6;
number: 6
category: "Embedded Software"

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
----------

![[Pasted image 20240317015142.png | 500]]

örneğin 5 tane *.c* dosyasıdan 5 tane *.o* dosyası oluşturulur ve linker bunu birleştirir.
sonra *.elf* executable + debug edilebilen dosyayı oluşturulur.

=> sonra *.bin ve .hex"* gibi kaynak dosyalarını üretiriz
=> *.bin* executable file
=> *.hex* executable file gibi....



##### Bunların hepsini bizim cross compailerimiz yaparç
=> arm-none-eabi-gcc