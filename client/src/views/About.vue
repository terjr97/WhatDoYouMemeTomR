<template>
    <div id="search">
        SEARCH 
        <v-select v-model="search" :options="[$fetchOptions]"></v-select>
    </div>
</template>

<script>

import {api} from "../models/my-fetch"

export default {
data:()=> ({
    options:[]
  }),
  methods: {
    fetchOptions (search, loading){
      api('captions,${search}').then(x=> this.options)
    }
  }
}
</script>
