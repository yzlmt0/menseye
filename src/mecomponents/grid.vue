<template>
	<view :style="styles.box">
		<view v-for="i in rowCount" :style="styles.row">
			<view v-for="j in row" :style="styles.item">
				<slot name="item" v-if="row * i + j - row - 1 < data.length" :item='data[row * i + j - row - 1]'></slot>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">import { CSSProperties } from '@vue/runtime-dom';

const props = defineProps<{
	data: any[],
	row: number,
	space?: string | number,
	runSpace?: string | number,
}>();

const rowCount = Math.ceil(props.data.length / props.row);
const styles = {
	box: <CSSProperties>{},
	row: <CSSProperties>{
		display: 'flex',
		flexDirection: 'row'
	},
	item: <CSSProperties>{
		flex: '1'
	},
};

if (props.space) {
	const space = typeof props.space == 'number' ? `${props.space}px` : props.space
	styles.box.marginLeft = `-${space}`
	styles.item.marginLeft = space
}
if (props.runSpace) {
	const runSpace = typeof props.runSpace == 'number' ? `${props.runSpace}px` : props.runSpace
	styles.box.marginTop = `-${runSpace}`
	styles.item.marginTop = runSpace
}



</script>

<style scoped>

</style>