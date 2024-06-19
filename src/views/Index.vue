<template>
    <section class="dark:bg-gray-100 dark:text-gray-800 font-thin">
        <div class="container flex flex-col mx-auto lg:flex-row">
            <div class="w-full lg:w-1/3 h-52 mt-14" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLAUlCjYrOygjJQfnQswucf_WAl41AP8URz3bj-iSXPyUoRmNdTOf3RVMnxzDTmIe_OW0&usqp=CAU'); background-position: center center; background-size: cover;"></div>
            <div class="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 mb-8 dark:text-violet-600">
                    <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <h2 class="text-2xl font-semibold leading-none">Binary and Decimal Converter App</h2>
                <p class="mt-8 mb-8 text-sm">The Binary and Decimal Converter web application is designed to facilitate easy conversion between binary and decimal number systems. It allows users to input binary or decimal numbers and quickly obtain their corresponding conversions. Additionally, the app provides detailed calculation steps for educational purposes, showing how each conversion is computed step-by-step.</p>
                <router-link to="/converter" class="self-start px-10 py-3 text-lg font-medium rounded-3xl dark:bg-violet-600 dark:text-gray-50">Get started</router-link>
            </div>
        </div>
    </section>
	<section class="m-4 md:m-8 font-thin  dark:text-gray-800">
		<div class="container mx-auto p-4 my-6 space-y-2 text-center">
			<h2 class="text-5xl font-bold">App Features</h2>			
		</div>
		<div class="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<div class="flex flex-col items-center p-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 dark:text-violet-600">
					<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
				</svg>
				<h3 class="my-3 text-2xl font-semibold">Binary to Decimal Conversion</h3>
				<div class="space-y-1 leading-tight">
					<p> Converts a binary number</p>
					<p>to its decimal equivalent</p>					
				</div>
			</div>
			<div class="flex flex-col items-center p-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 dark:text-violet-600">
					<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
				</svg>
				<h3 class="my-3 text-2xl font-semibold">Decimal to Binary Conversion</h3>
				<div class="space-y-1 leading-tight">
					<p>Converts a decimal number </p>
					<p> to its binary equivalent.</p>					
				</div>
			</div>			 
			<div class="flex flex-col items-center p-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 dark:text-violet-600">
					<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
				</svg>
				<h3 class="my-3 text-2xl font-semibold">Decimal to Hexadecimal</h3>
				<div class="space-y-1 leading-tight">
					<p>Converts a decimal number to</p>
					<p>its hexadecimal (base-16) equivalent.</p>					
				</div>
			</div>
			<div class="flex flex-col items-center p-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 dark:text-violet-600">
					<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
				</svg>
				<h3 class="my-3 text-2xl font-semibold">Binary to Hexadecimal</h3>
				<div class="space-y-1 leading-tight">
					<p> Converts a binary number to </p>
					<p>ts hexadecimal (base-16) equivalent.</p>					
				</div>
			</div>
			<div class="flex flex-col items-center p-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 dark:text-violet-600">
					<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
				</svg>
				<h3 class="my-3 text-2xl font-semibold">Signed Binary to Decimal</h3>
				<div class="space-y-1 leading-tight">
					<p>Converts a signed 2's complement</p>
					<p>binary number to its decimal equivalent.</p>					
				</div>
			</div>
		</div>
	</section>
</template>