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
---

"Cloud computing" plays a vital role in the creation of software products and services. It's also one of the most highly sought-after skills in the tech industry.



```javascript
/**
 ******************************************************************************
 * @file    Src/main.c 
 * @author  Hemant Nile
 * @version V1
 * @date    04-Feb-2017
 * @brief   Simple implementation of accessing LIS3DSH accelerometer on STM32F4 
	    Discovery board using SPI interface. Four LEDs present on the board 
	    lit up when board is tilted in their direction.
 
 ******************************************************************************
 */

#include "main.h"

static void Configure_LEDS(void);
static void Configure_SPI1(void);

int main(void)
{
	int8_t x, y, z;

// Configure peripherals
	Configure_LEDS();
	Configure_SPI1();

// Initiating accelerometer LIS3DSH
	SPI_Tx(0x20U, 0x67U); // CTRL_REG4: output data rate = 100Hz, continuous update, x,y,z enable
	SPI_Tx(0x24U, 0x48U); // CTRL_REG5: Anti-aliasing filter bandwidth=200Hz, full scale = 4g

// Infinite loop
	while (1)
	{
		x = SPI_Rx((uint8_t) 0x29U);
		y = SPI_Rx((uint8_t) 0x2BU);
		z = SPI_Rx((uint8_t) 0x2DU);

		if (x < -20) SetPin(GPIOD, PIN_12);
		else ResetPin(GPIOD, PIN_12);
		if (x > 20) SetPin(GPIOD, PIN_14);
		else ResetPin(GPIOD, PIN_14);
		if (y < -20) SetPin(GPIOD, PIN_15);
		else ResetPin(GPIOD, PIN_15);
		if (y > 20) SetPin(GPIOD, PIN_13);
		else ResetPin(GPIOD, PIN_13);
	}
}

/**  
 *   System Clock Configuration
 *   The system Clock is configured as follows in MAIN.H : 
 *
 *            System Clock source            = PLL (HSE)
 *            SYSCLK(Hz)                     = 168000000
 *            HCLK(Hz)                       = 168000000
 *            AHB Prescaler                  = 1
 *            APB1 Prescaler                 = 4
 *            APB2 Prescaler                 = 2
 *            HSE Frequency(Hz)              = 8000000
 *            PLL_M                          = 8
 *            PLL_N                          = 336
 *            PLL_P                          = 2
 *            PLL_Q                          = 7
 *            VDD(V)                         = 3.3
 *            Main regulator output voltage  = Scale1 mode
 *            Flash Latency(WS)              = 5
 */
void SystemInit(void)
{
// FPU settings
#if (__FPU_PRESENT == 1) && (__FPU_USED == 1)
	SCB->CPACR |= ((3UL << 10*2)|(3UL << 11*2)); /* set CP10 and CP11 Full Access */
#endif

// Configure the Vector Table location add offset address
#ifdef VECT_TAB_SRAM
	SCB->VTOR = SRAM_BASE; /* Vector Table Relocation in Internal SRAM */
#else
	SCB->VTOR = FLASH_BASE; /* Vector Table Relocation in Internal FLASH */
#endif

// Enable PWR CLK and set voltage scale 1
	CLK_ENABLE(RCC->APB1ENR, RCC_APB1ENR_PWREN);
	SET_BIT(PWR->CR, PWR_CR_VOS);

// Flash latency, prefech, instruction cache , data cache
	MODIFY_REG(FLASH->ACR, FLASH_ACR_LATENCY, FLASH_ACR_LATENCY_5WS);
	SET_BIT(FLASH->ACR, FLASH_ACR_PRFTEN | FLASH_ACR_ICEN | FLASH_ACR_DCEN);

// Enable HSE and wait for it	
	SET_BIT(RCC->CR, RCC_CR_HSEON);
	while (READ_BIT(RCC->CR, RCC_CR_HSERDY) != RCC_CR_HSERDY)
	{
	}
	WRITE_REG(RCC->PLLCFGR, RCC_PLLCFGR_PLLSRC_HSE | PLL_M | PLL_N << 6 | ((PLL_P >> 1U) - 1U) << 16 | PLL_Q << 24);
// Enable PLL and wait for it	
	SET_BIT(RCC->CR, RCC_CR_PLLON);
	while (READ_BIT(RCC->CR, RCC_CR_PLLRDY) != RCC_CR_PLLRDY)
	{
	}
	MODIFY_REG(RCC->CFGR, RCC_CFGR_PPRE2 | RCC_CFGR_PPRE1 | RCC_CFGR_HPRE | RCC_CFGR_SW_PLL,
			APB2_PRE | APB1_PRE | AHB_PRE | RCC_CFGR_SW_PLL);
	while (READ_BIT(RCC->CFGR, RCC_CFGR_SWS) != RCC_CFGR_SWS_PLL)
	{
	}
// Disable HSI	
	CLEAR_BIT(RCC->CR, RCC_CR_HSION);
}

static void Configure_LEDS(void)
{
	CLK_ENABLE(RCC->AHB1ENR, RCC_AHB1ENR_GPIODEN);
	MODIFY_REG(GPIOD->MODER, (uint32_t) 0xFF000000U, (uint32_t) 0x55000000U); // pins 12,13,14,15 as output
	MODIFY_REG(GPIOD->OTYPER, (uint32_t) 0xFF000000U, (uint32_t) 0x00000000U); // GPIOD->OTYPER - PUSH PULL 
	MODIFY_REG(GPIOD->OSPEEDR, (uint32_t) 0xFF000000U, (uint32_t) 0xFF000000U); // pins 12,13,14,15 very high speed 
	MODIFY_REG(GPIOD->PUPDR, (uint32_t) 0xFF000000U, (uint32_t) 0x00000000U); // GPIOD->PUPDR - NO PULL
}

static void Configure_SPI1(void)
{
	CLK_ENABLE(RCC->AHB1ENR, RCC_AHB1ENR_GPIOAEN);
	CLK_ENABLE(RCC->AHB1ENR, RCC_AHB1ENR_GPIOEEN);

	MODIFY_REG(GPIOA->MODER, (uint32_t) 0x0000FC00U, (uint32_t) 0x0000A800U);
	MODIFY_REG(GPIOA->OTYPER, (uint32_t) 0x000000E0U, (uint32_t) 0x00000000U);
	MODIFY_REG(GPIOA->OSPEEDR, (uint32_t) 0x0000FC00U, (uint32_t) 0x00005400U);
	MODIFY_REG(GPIOA->PUPDR, (uint32_t) 0x0000FC00U, (uint32_t) 0x00005400U);
	MODIFY_REG(GPIOA->AFR[0], (uint32_t) 0xFFF00000U, (uint32_t) 0x55500000U);

	MODIFY_REG(GPIOE->MODER, (uint32_t) 0x000000C0U, (uint32_t) 0x00000040U);
	MODIFY_REG(GPIOE->OTYPER, (uint32_t) 0x00000008U, (uint32_t) 0x00000000U);
	MODIFY_REG(GPIOE->OSPEEDR, (uint32_t) 0x000000C0U, (uint32_t) 0x00000080U);
	MODIFY_REG(GPIOE->PUPDR, (uint32_t) 0x000000C0U, (uint32_t) 0x00000040U);

	CLK_ENABLE(RCC->APB2ENR, RCC_APB2ENR_SPI1EN);

	WRITE_REG(SPI1->CR1, SPI_CR1_SSM | SPI_CR1_SSI | SPI_CR1_MSTR | SPI_CR1_CPHA | SPI_CR1_CPOL | SPI_CR1_BR_1);
	WRITE_REG(SPI1->CR2, SPI_CR2_ERRIE);

	NVIC_SetPriority(SPI1_IRQn, 0);
	NVIC_EnableIRQ(SPI1_IRQn);

	SetPin(GPIOE, PIN_3);
	SET_BIT(SPI1->CR1, SPI_CR1_SPE);
}

void SPI_Tx(uint8_t address, uint8_t data)
{
	uint8_t temp;
	ResetPin(GPIOE, PIN_3);
	while (READ_BIT(SPI1->SR, SPI_SR_TXE) == 0)
	{
	}
	*((__IO uint8_t *)&(SPI1->DR)) = address;
	while (READ_BIT(SPI1->SR, SPI_SR_RXNE) == 0)
	{
	}
	temp = *((__IO uint8_t *)&(SPI1->DR));	// useless read
	while (READ_BIT(SPI1->SR, SPI_SR_TXE) == 0)
	{
	}
	*((__IO uint8_t *)&(SPI1->DR)) = data;
	while (READ_BIT(SPI1->SR, SPI_SR_RXNE) == 0)
	{
	}
	temp = *((__IO uint8_t *)&(SPI1->DR));	// useless read
	while (READ_BIT(SPI1->SR, SPI_SR_BSY) == SPI_SR_BSY)
	{
	}
	SetPin(GPIOE, PIN_3);
}

uint8_t SPI_Rx(uint8_t address)
{
	uint8_t temp;
	ResetPin(GPIOE, PIN_3);
	address |= (uint8_t) 0x80U;
	while (READ_BIT(SPI1->SR, SPI_SR_TXE) == 0)
	{
	}
	*((__IO uint8_t *)&(SPI1->DR)) = address;
	while (READ_BIT(SPI1->SR, SPI_SR_RXNE) == 0)
	{
	}
	temp = *((__IO uint8_t *)&(SPI1->DR));	// useless read
	while (READ_BIT(SPI1->SR, SPI_SR_TXE) == 0)
	{
	}
	*((__IO uint8_t *)&(SPI1->DR)) = (uint8_t)0x00U;
	while (READ_BIT(SPI1->SR, SPI_SR_RXNE) == 0)
	{
	}
	temp = *((__IO uint8_t *)&(SPI1->DR));
	while (READ_BIT(SPI1->SR, SPI_SR_BSY) == SPI_SR_BSY)
	{
	}
	SetPin(GPIOE, PIN_3);
	return temp;
}

void SPI1_TransferError_Callback(void)
{
// Disable RXNE  Interrupt
	CLEAR_BIT(SPI1->CR2, SPI_CR2_RXNEIE);

// Disable TXE   Interrupt
	CLEAR_BIT(SPI1->CR2, SPI_CR2_TXEIE);

// All LEDs ON to indicate error occurs
	SetPin(GPIOD, PIN_12);
	SetPin(GPIOD, PIN_13);
	SetPin(GPIOD, PIN_14);
	SetPin(GPIOD, PIN_15);
}

void Error_Handler(void)
{
// User may add here some code to deal with this error
	while (1)
	{
	}
}
```



```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```




In fact, most of the projects on this site will require cloud interaction of some sort—particularly with AWS's serverless products.

### Getting Started

> To use AWS in these projects, we'll need to set up an account, the CLI, and the SDK.

### Create an account

If you don't already have an account then [sign up here](https://portal.aws.amazon.com/billing/signup#/start).

<a href="http://google.com.au/" rel="some text">![Foo](https://miro.medium.com/v2/resize:fit:828/format:webp/1*vIL8-sC50FdRYj0k3OB7IA.jpeg)</a>

Once you are signed up, you should be able to log in to the [AWS Console](https://aws.amazon.com/console/). It might look overwhelming if you're seeing for the first time.

### Install the CLI

The AWS CLI is a command-line application that lets you interact with your AWS account from the terminal. It's available on all platforms.

If you are a proficient Python user, you can just install it with `pip`.

```bash
pip install awscli
```

Otherwise, check out the [official instructions](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html).

Once installed, you should be able to run this command from the terminal to see its version.

```bash
aws --version
```

### Create an IAM user

The CLI will access your AWS account via an "IAM user." You can create one from the **Users** page in your [IAM console](https://console.aws.amazon.com/iam).

Once the user is created, you'll need to generate access keys (passwords, essentially) for it.

* [Creating an Admin IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html)
* [Creating access keys for a user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)

Your access keys should look something like this:

```
Access key ID: AKIAIOSFODNN7EXAMPLE
Secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```


### Configure the CLI

Next you need to [configure the CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) so that it can access your AWS account via the IAM user.

Basically, just run this command and paste in your access keys.

```bash
aws configure
```

Additionally, you'll also be asked for a [default region](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-region) and [default output format](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-format).

You may leave them empty—but generally I like to use:

```
Default region name [None]: us-east-1
Default output format [None]: json
```

### Configuration files

Once configured, the AWS CLI [saves the credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) and region/format profiles to your computer. They are typically in these locations:

```
~/.aws/credentials
~/.aws/config
```

You can open them up and edit them if you like or just run `aws configure` again to change them.

### Test the CLI!

Now you should be able to use your CLI to access AWS. For example, I should be able to see the S3 buckets I have in `us-east-1`:

```bash
aws s3 ls

2020-12-09 22:36:32 blog.pixegami.com
2020-12-27 00:04:52 cloud-archiver.5dac84a54677.archivetest
```

Generally, everything that can be done in the console can also be done in the CLI. Check out the [full reference guide here](https://docs.aws.amazon.com/cli/latest/index.html).

### AWS SDK

Finally, to use AWS directly from your application code, you need to download the [SDK](https://aws.amazon.com/tools/) for the language you work with.

The SDKs can be configured in different ways as well, but by default it usually uses the same profiles and credentials stored by your `aws configure`.


### That's it! 

You're all set to start using AWS.

### Why AWS?

When we bring "the cloud" into a project, it's usually because there's some capability we'd like to add.

* Hosting for a website or service.
* File or data storage.
* On-demand computation.
* Authentication.

And there's many viable solutions to choose from—[Azure](https://azure.microsoft.com/en-au/), [Google Cloud](https://cloud.google.com), [Firebase](https://firebase.google.com), [Digital Ocean](https://try.digitalocean.com).

So why could you choose [AWS](https://aws.amazon.com/what-is-aws/) over any of these alternatives? From a new user's perspective:

 * **Largest marketshare (at 30%)** which roughly translates to lots of community resources and job opportunities.
 * **Most services available (175+)** which means more tools at your disposal, well-integrated under one umbrella.

On the flip-side, the biggest drawback is its upfront complexity.

Personally though, the reason I use AWS is because it's the technology I'm most familiar with.


## Why Serverless?

**It's cheaper.** Most cloud "getting started" guides will show you how to spin up a server—a mercenary rented computer that stays online  24/7 to do your bidding.

But for most of my projects, I'm going utilize technology that doesn't require a hosted server. In particular:

| Service | Purpose |
| --- | --- |
| S3 | File storage |
| DynamoDB | Database |
| Lambda | Compute engine |

Their on-demand pricing means the cost scales with usage. There is a [free tier](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc), and it only begins to cost money if usage exceeds a certain amount.

For small projects with light traffic, this usually translates to monthly costs of **less than a dollar** (if not completely free).

In comparison, the price of hosting a server typically starts at **$5.00 per month**.

## Continue Learning

* [Official documentation](https://aws.amazon.com/getting-started/)
* [Free YouTube videos](https://www.youtube.com/watch?v=ubCNZRNjhyo)
* [Udemy Courses](https://www.udemy.com/course/aws-certified-developer-associate/)
