<template>
  <section class="form-wrapper">
  <form @submit.prevent="submitTextForm">
  <h2 class="mb-4">Upload Course</h2>
      <!-- <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="title" required>
        </div>
   -->
        <label>Course Name:</label>
      <input type="text" v-model="courseName">
      
      <label>Course Price in USD:</label>
      <input type="number" v-model="coursePrice" class="my-3">
      
      <label>What will you learn:</label>
      <div v-for="(item, index) in learnItems" :key="index" class="learn">
        <input type="text" v-model="items">
        <button type="button" @click="removeLearnItem(index)">-</button>
      </div>
      <button type="button" @click="addLearnItem()">+</button>
      
  
        <div class="form-group">
          <label for="description">Course Description</label>
          <textarea id="description" v-model="description" required rows="6"></textarea>
        </div>
  
        <div class="form-group">
          <label for="prerequisites">Prerequisites</label>
          <textarea id="prerequisite" v-model="prerequisites"  rows="3"></textarea>
        </div>
  
        <div class="form-group">
          <label for="duration"> Course Duration</label>
          <input type="number" id="duration" v-model="duration" required>
        </div>
  
        <div class="form-group">
          <label for="level">Level</label>
          <select id="level" v-model="level" required>
            <option value="" disabled>Select Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="category">Category</label>
          <select id="category" v-model="category" required>
            <option value="" disabled>Select Category</option>
            <option value="programming">Programming</option>
            <option value="business">Business</option>
            <option value="design">Design</option>
          </select>
        </div>
  
        <!-- end of first form  -->
        <h3 class="my-5">Upload Your Content</h3>
      <div v-for="(section, sectionIndex) in sections" :key="sectionIndex" class="my-5">
        <label class="section-label">Section {{ sectionIndex + 1 }}:</label>

        <input type="text" v-model="section.sectionName" placeholder="Section Name">
        <div v-for="(lesson, lectureIndex) in section.lesson" :key="lectureIndex">
          <label>Lecture {{ sectionIndex + 1 }}.{{ lectureIndex + 1 }}:</label>

          <input type="text" v-model="lesson.lessonName" placeholder="Lecture Name">
          <input type="file" @change="handleFileChange(sectionIndex, lectureIndex)">
          <button type="button" @click="removeLecture(sectionIndex, lectureIndex)" class="remove-btn">Remove Lecture</button>
        </div>
        <button type="button" @click="addLecture(sectionIndex)" class="me-5 add-btn">+ Add Lecture</button>
        <button type="button" @click="removeSection(sectionIndex)" class="remove-btn">Remove Section</button>
      </div>
      <button type="button" @click="addSection" class="me-5 add-btn">+ Add Section</button>
      <!-- <button type="submit" class="ml-5">Upload Course</button> -->
  
      <button class="submit-btn">Submit</button>
    </form>
  </section>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        sections: [
          {
            sectionName: '',
            lesson: [
              {
                lessonName: '',
                video: null
              }
            ]
          }
        ] , 
         courseName: '',
        coursePrice: '',
        learnItems: [''],
        items : [],
      }
    },
    methods: {
      addSection() {
        this.sections.push({
          sectionName: '',
          lesson: [
            {
              lessonName: '',
              video: null
            }
          ]
        });
      },
      addLearnItem() {
        this.learnItems.push('');
      },
      removeLearnItem(index) {
        this.learnItems.splice(index, 1);
      },
      removeSection(index) {
        this.sections.splice(index, 1);
      },
      addLecture(sectionIndex) {
        this.sections[sectionIndex].lesson.push({
          name: '',
          video: null
        });
      },
      removeLecture(sectionIndex, lectureIndex) {
        this.sections[sectionIndex].lectures.splice(lectureIndex, 1);
      },
      handleFileChange(sectionIndex, lectureIndex) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          this.sections[sectionIndex].lectures[lectureIndex].video = reader.result;
        };
        reader.readAsDataURL(file);
      },
      submitForm() {
        const formData = new FormData();
        this.sections.forEach((section, index) => {
          formData.append(`sections[${index}][name]`, section.name);
          section.lectures.forEach((lecture, subIndex) => {
            formData.append(`sections[${index}][lectures][${subIndex}][name]`, lecture.name);
            formData.append(`sections[${index}][lectures][${subIndex}][video]`, lecture.video);
          });
        });
        // Send the form data to the server
        // using Axios or another HTTP client library
        console.log(formData);
      },
      async submitTextForm() {
      const response = await fetch("http://localhost:4000/course/create_course", {
        method: "POST",
        body: JSON.stringify({
          course_name: this.courseName,
          course_price: this.coursePrice,
          course_description: this.description,
          catgeory: this.category,
          level: this.level,
          skilled_learn : this.items,
          sections : this.sections,
        }),
        headers: {
              // 'Content-Type': 'multipart/form-data',
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
      });
      const responseData = await response.json();
      console.log(responseData)
    if (!response.ok) {
      // console.log(response.ok)
      const error = new Error(responseData.message || "Failed in request.");
      throw error;
    }
    },
    }
  };
  </script>
  
  
  <style scoped>
  .upload-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  h2 {
    margin-top: 0;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input,
  textarea,
  select {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0069d9;
  }
  form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="file"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #4CAF50;
    background-color: #375386;
    color: white;
    cursor: pointer;
    margin-bottom: 20px;
    font-weight: 600;
  }
  
  button:hover {
    background-color: #27215e;
  }
  
  input[type="submit"] {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: #3e8e41;
  }
  
  
  
  .learn {
    display: flex;
  }
  
  /* .submit-btn {
    display: block;
    margin: 0 auto;
    width: 10rem;
    background-color: rgb(112, 34, 136);
  
  } */
  
  
  
  
  
  .submit-btn {
    display: block;
    margin: 1rem auto;
    width: 12rem;
    border-color: var(--theme-secondary-color);
    color: #fff;
    background: var(--theme-secondary-color);
    font-weight: 600;
    position: relative;
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
    border: 2px solid transparent;
    transition: all 0.6s ease;
    border-radius: 6px;
  }
  
  .submit-btn:hover {
    background: var(--theme-primary-color);
      border-color: var(--theme-primary-color);
  }
  
  .section-label {
    font-weight: 700;
    color: rgb(92, 71, 117);
  }
  
  .remove-btn {
    background-color: rgb(44, 5, 77);
  }
  .remove-btn:hover {
    background-color: rgb(116, 22, 194);
  }
  .add-btn {
    background-color: rgb(22, 92, 139);
  }
  .add-btn:hover {
    background-color:rgb(98, 79, 141) ;
  }
  
  </style>