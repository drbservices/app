<template>
	<v-timeago
		v-if="value && options.showRelative"
		v-tooltip="displayValue"
		:datetime="date"
		:auto-update="60"
		:locale="$i18n.locale"
		class="no-wrap"
	></v-timeago>
	<div v-else>{{ displayValue }}</div>
</template>

<script>
import mixin from '@directus/extension-toolkit/mixins/interface';

export default {
	mixins: [mixin],
	computed: {
		date() {
			if (!this.value) return null;
			return new Date(this.value.replace(' ', 'T') + 'Z');
		},
		displayValue() {
			if (!this.date) return;
			return this.$d(this.date, 'long') + ' GMT';
		}
	}
};
</script>
