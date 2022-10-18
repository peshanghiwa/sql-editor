<script setup>
import { ref } from "vue";
import users from "../assets/users.json";

const openedFullColumn = ref(null);
const showFullColumn = (columnName) => {
  if (openedFullColumn.value) {
    const oldElement = document.getElementById(openedFullColumn.value);
    oldElement.classList.remove("full-column");
  }

  const element = document.getElementById(columnName);
  element.classList.add("full-column");
  openedFullColumn.value = columnName;
};
</script>

<template>
  <div class="result-table-container">
    <table v-if="users.length !== 0">
      <tr class="table-header">
        <th>#</th>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Phone Number</th>
        <th>Job</th>
        <th>University</th>
        <th>City</th>
        <th>Country</th>
      </tr>
      <tr v-for="(user, index) in users" :key="user.id">
        <td
          @dblclick="showFullColumn(`number_${user.id}`)"
          :id="`number_${user.id}`"
        >
          {{ index + 1 }}
        </td>
        <td @dblclick="showFullColumn(`id_${user.id}`)" :id="`id_${user.id}`">
          {{ user.id }}
        </td>
        <td
          @dblclick="showFullColumn(`firstname_${user.id}`)"
          :id="`firstname_${user.id}`"
        >
          {{ user.first_name }}
        </td>
        <td
          @dblclick="showFullColumn(`lastname_${user.id}`)"
          :id="`lastname_${user.id}`"
        >
          {{ user.last_name }}
        </td>
        <td
          @dblclick="showFullColumn(`email_${user.id}`)"
          :id="`email_${user.id}`"
        >
          {{ user.email }}
        </td>
        <td
          @dblclick="showFullColumn(`gender_${user.id}`)"
          :id="`gender_${user.id}`"
        >
          {{ user.gender }}
        </td>
        <td
          @dblclick="showFullColumn(`phonenumber_${user.id}`)"
          :id="`phonenumber_${user.id}`"
        >
          {{ user.phone_number }}
        </td>
        <td @dblclick="showFullColumn(`job_${user.id}`)" :id="`job_${user.id}`">
          {{ user.job }}
        </td>
        <td
          @dblclick="showFullColumn(`university_${user.id}`)"
          :id="`university_${user.id}`"
        >
          {{ user.university }}
        </td>
        <td
          @dblclick="showFullColumn(`city_${user.id}`)"
          :id="`city_${user.id}`"
        >
          {{ user.city }}
        </td>
        <td
          @dblclick="showFullColumn(`country_${user.id}`)"
          :id="`country_${user.id}`"
        >
          {{ user.country }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.result-table-container {
  height: 100%;
  overflow: auto;
}

table {
  width: max-content;
}

table,
th,
td {
  border: 1px solid rgb(151, 151, 151);
  border-collapse: collapse;
}

td,
th {
  width: 180px;
  max-width: 180px;
  font-size: 14px;
  padding: 5px 8px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

th {
  background-color: #303030;
}

tr {
  transition: all 0.2s ease;
}
td {
  cursor: pointer;
}

tr:hover {
  background-color: #4a4a4a;
}

th:nth-child(1) {
  width: 60px;
}

/* select every first td of th */
tr td:nth-child(1) {
  background-color: #303030;
  width: 60px;
  cursor: default;
}

.full-column {
  max-width: unset;
  width: unset;
  white-space: pre-wrap;
}
</style>
