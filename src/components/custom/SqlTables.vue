<script setup>
import { ref } from "vue";
const config = ref({
  roots: ["user", "university", "department"],
  keyboardNavigation: false,
  padding: 25,
  editable: true,
});

const nodes = ref({
  // Users Tree
  user: {
    text: "User",
    children: [
      "user_first_name",
      "user_last_name",
      "user_age",
      "user_birthdate",
      "user_degree",
      "user_address",
      "user_phone",
      "user_email",
      "user_year",
      "user_created_at",
      "user_updated_at",
    ],
    state: {
      editable: false,
    },
  },

  user_first_name: {
    text: "Name",
    children: [],
  },
  user_last_name: {
    text: "Last Name",
    children: [],
  },
  user_age: {
    text: "Age",
    children: [],
  },
  user_birthdate: {
    text: "Birthdate",
    children: [],
  },
  user_degree: {
    text: "Degree",
    children: [],
  },
  user_address: {
    text: "Address",
    children: [],
  },
  user_phone: {
    text: "Phone",
    children: [],
  },
  user_email: {
    text: "Email",
    children: [],
  },
  user_year: {
    text: "Year",
    children: [],
  },
  user_created_at: {
    text: "Created At",
    children: [],
  },
  user_updated_at: {
    text: "Updated At",
    children: [],
  },

  // University
  university: {
    text: "University",
    children: [
      "university_name",
      "university_phone",
      "university_location",
      "university_contact",
      "university_email",
      "university_country",
      "university_website",
      "university_year",
      "university_created_at",
      "university_updated_at",
    ],
  },
  university_name: {
    text: "Name",
    children: [],
  },
  university_phone: {
    text: "Phone",
    children: [],
  },
  university_location: {
    text: "Location",
    children: [],
  },
  university_contact: {
    text: "Contact",
    children: [],
  },
  university_email: {
    text: "Email",
    children: [],
  },
  university_country: {
    text: "Country",
    children: [],
  },
  university_website: {
    text: "Website",
    children: [],
  },
  university_year: {
    text: "Year",
    children: [],
  },
  university_created_at: {
    text: "Created At",
    children: [],
  },
  university_updated_at: {
    text: "Updated At",
    children: [],
  },

  // Department
  department: {
    text: "Department",
    children: [
      "department_name",
      "department_university",
      "department_location",
      "department_contact",
      "department_email",
      "department_duration",
      "department_class_no",
      "department_class_size",
      "department_created_at",
      "department_updated_at",
    ],

    state: {
      editable: false,
    },
  },

  department_name: {
    text: "Name",
    children: [],
  },
  department_university: {
    text: "University",
    children: [],
  },
  department_location: {
    text: "Location",
    children: [],
  },
  department_contact: {
    text: "Contact",
    children: [],
  },
  department_email: {
    text: "Email",
    children: [],
  },
  department_duration: {
    text: "Duration",
    children: [],
  },
  department_class_no: {
    text: "Class No",
    children: [],
  },
  department_class_size: {
    text: "Class Size",
    children: [],
  },
  department_created_at: {
    text: "Created At",
    children: [],
  },
  department_updated_at: {
    text: "Updated At",
    children: [],
  },
});
</script>

<template>
  <div class="tables-pane-container">
    <tree-view :config="config" :nodes="nodes"> </tree-view>
  </div>
</template>

<style scoped>
.tables-pane-container {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding-bottom: 50px;
  background-color: var(--background-color);
}
::v-deep(.icon-wrapper svg path) {
  fill: white !important;
}

::v-deep(.node-wrapper),
::v-deep(.node-wrapper *) {
  transition: all ease 0.2s;
}
::v-deep(.node-wrapper:hover) {
  background-color: var(--background-color-2);
}
::v-deep(.node-wrapper:focus) {
  background-color: var(--background-color-3);
}
::v-deep(.node-wrapper.editable input) {
  color: black;
  background-color: #e5e5e5;
  border: none;
}
</style>
