<template>
    <TabView>
        <TabPanel header="My Tab">
            This content does not HMR refresh automatically 😞
        </TabPanel>
    </TabView>
</template>

<script setup lang="ts">
    import TabView from 'primevue/tabview'
    import TabPanel from 'primevue/tabpanel'
</script>
