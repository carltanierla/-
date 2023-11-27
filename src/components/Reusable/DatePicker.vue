<template>
    <v-app>
      <v-container>
        <v-menu v-model="isMenuOpen" :close-on-content-click="false">
            <template v-slot:activator="{ props }">
                <v-text-field
                    :label="label"
                    :model-value="formattedDate"
                    v-bind="props"
                    variant="outlined"
                    append-inner-icon="mdi-calendar-account"
                ></v-text-field>
            </template>
            <v-date-picker v-model="selectedDate" :color="color"></v-date-picker>
        </v-menu>
      </v-container>
    </v-app>
  </template>
  
  <script>
    export default {
        props: {
            label: String,
            color: String,
            modelValue: Date
        },

        data() {
            return {
                isMenuOpen: false,
                selectedDate: this.modelValue,
            }
        },

        computed: {
            formattedDate() {
                return this.selectedDate ? this.selectedDate.toLocaleDateString("en") : "";
            }
        },

        watch: {
            selectedDate() {
                this.$emit('changeDate', this.formattedDate);
            }
        }
    }
  </script>
  

<style>

    .v-input__control {
        width: 150% !important;
        text-align: left;
    }
    
    input, .date-text-field {
        text-align: left;
    }

    .v-application__wrap {
        min-height: 0 !important;
    }

    .v-container {
        padding: 0 16px !important;
    }

</style>