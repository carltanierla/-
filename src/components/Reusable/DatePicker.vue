<template>
    <v-app>
      <v-container>
        <v-menu v-model="isMenuOpen" :close-on-content-click="false">
            <template v-slot:activator="{ props }">
                <v-text-field
                    :readonly=true
                    hide-details
                    class="date-input"
                    :label="label"
                    :model-value="formattedDate"
                    v-bind="props"
                    variant="outlined"
                    append-inner-icon="mdi-calendar-account"
                ></v-text-field>
            </template>
            <v-date-picker v-model="oSelectedDate" :color="color" :min="getMinEndDate"></v-date-picker>
        </v-menu>
      </v-container>
    </v-app>
  </template>
  
  <script>
    import moment from 'moment';
    export default {
        props: {
            label: String,
            color: String,
            modelValue: Date,
            type: String,
            min: Date
        },

        data() {
            return {
                isMenuOpen: false,
                oSelectedDate: this.modelValue,
                sMinEndDate: null,
            }
        },

        computed: {
            /**
             * Format Date to string
             */
            formattedDate() {
                return this.oSelectedDate ? this.oSelectedDate.toLocaleDateString("en") : "";
            },
            
            /**
             * Get minimum end date based on the selected start date
             */
            getMinEndDate() {
                if (this.type === 'endDate') {
                    return moment(this.min).format('YYYY-MM-DD');
                }

                return null;
            }
        },
        watch: {
            /**
             * Watch for selectedDate changes
             * emits change event
             */
            oSelectedDate() {
                this.$emit('changeDate', this.oSelectedDate);
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

    .v-field__input {
        text-align: left;
    }
</style>