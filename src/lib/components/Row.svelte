<div class="flex flex-col md:flex-row gap-4 items-start justify-start max-w-2xl text-white py-4 w-full">
	<div class="flex text-gray-400 text-start min-w-[5rem] text-lg">
		<slot name="title" />
	</div>
    <div class="text-white text-start max-w-2xl text-lg font-roboto-condensed">
        <slot name="content" />
    </div>
</div>
