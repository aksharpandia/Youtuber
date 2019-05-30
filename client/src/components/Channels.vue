<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1>Youtuber</h1>
        <hr><br><br>
        <button type="button" class="btn btn-success btn-sm" v-b-modal.book-modal>Add Keyword  </button>
        <button type="button" class="btn btn-warning btn-sm" v-b-modal.book-update-modal>Update</button>
        <button type="button" class="btn btn-danger btn-sm" v-b-modal.book-delete-modal>Delete</button>
        <br><br>

      </div>
      <iframe class="airtable-embed" src="https://airtable.com/embed/shrjUC1PDucRtnk0m?backgroundColor=cyan&viewControls=on" frameborder="0" onmousewheel="" width="75%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
      <hr><br><br>
      <iframe class="airtable-embed" src="https://airtable.com/embed/shrnIWoPkTXrPLPZI?backgroundColor=cyan&viewControls=on" frameborder="0" onmousewheel="" width="75%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
    </div>
    <b-modal ref="addBookModal"
             id="book-modal"
             title="Add a new set of top channels"
             hide-footer>
      <b-form @submit="onSubmit" @reset="onReset" class="w-100">
      <b-form-group id="form-title-group"
                    label="Keyword:"
                    label-for="form-title-input">
          <b-form-input id="form-title-input"
                        type="text"
                        v-model="addBookForm.keyword"
                        required
                        placeholder="Enter keyword">
          </b-form-input>
        </b-form-group>
        <b-form-group id="form-author-group"
                      label="Max results:"
                      label-for="form-author-input">
            <b-form-input id="form-author-input"
                          type="text"
                          v-model="addBookForm.maxResults"
                          required
                          placeholder="Enter number of search results to go through">
            </b-form-input>
          </b-form-group>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-modal>
  	<b-modal ref="editBookModal"
         id="book-update-modal"
         title="Update"
         hide-footer>
  <b-form @submit="onSubmitUpdate" @reset="onResetUpdate" class="w-100">
  <b-form-group id="form-title-edit-group"
                label="Title:"
                label-for="form-title-edit-input">
      <b-form-input id="form-title-edit-input"
                    type="text"
                    v-model="editForm.keyword"
                    required
                    placeholder="Enter keyword you'd like to update">
      </b-form-input>
    </b-form-group>
    <b-form-group id="form-author-edit-group"
                  label="Max results:"
                  label-for="form-author-edit-input">
        <b-form-input id="form-author-edit-input"
                      type="text"
                      v-model="editForm.maxResults"
                      required
                      placeholder="Enter number of search results to go through">
        </b-form-input>
      </b-form-group>
    <b-button type="submit" variant="primary">Update</b-button>
    <b-button type="reset" variant="danger">Cancel</b-button>
  </b-form>
</b-modal>

<b-modal ref="deleteBookModal"
         id="book-delete-modal"
         title="Delete"
         hide-footer>
  <b-form @submit="onSubmitDelete" @reset="onResetDelete" class="w-100">
  <b-form-group id="form-title-delete-group"
                label="Title:"
                label-for="form-title-delete-input">
      <b-form-input id="form-title-delete-input"
                    type="text"
                    v-model="deleteForm.keyword"
                    required
                    placeholder="Enter title">
      </b-form-input>
    </b-form-group>
       <b-form-group id="form-author-delete-group"
                  label="Author:"
                  label-for="form-author-delete-input">
        <b-form-input id="form-author-delete-input"
                      type="text"
                      v-model="deleteForm.maxResults"
                      required
                      placeholder="Enter author">
        </b-form-input>
      </b-form-group>
    <b-button type="submit" variant="primary">Update</b-button>
    <b-button type="reset" variant="danger">Cancel</b-button>
  </b-form>
</b-modal>

  </div>
</template>

<script>
import axios from 'axios';
import Alert from './Alert';

export default {
  data() {
    return {
    deleteForm: {
  		keyword: '',
  		maxResults: '',
	},
      editForm: {
  		keyword: '',
  		maxResults: '',
	},
      addBookForm: {
        keyword: '',
        maxResults:'',
      },
      confirmation: "",
    };
  },
  methods: {
    addChannel(payload) {
      const path = 'http://localhost:5000/ivi/create/';
      axios.post(path, payload)
        .then((res) => {
          this.confirmation = res.data
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },

   updateBook(payload) {
  	const path = 'http://localhost:5000/ivi/update/';
  	axios.put(path, payload)
    .then((res) => {
      this.confirmation = res.data
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    });
},
   deleteBook(payload) {
  	const path = 'http://localhost:5000/ivi/delete/';
  	axios.delete(path, payload)
    .then((res) => {
      this.confirmation = res.data
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    });
},
    initForm() {
      this.addBookForm.maxResults = '';
      this.addBookForm.keyword = '';
      this.editForm.maxResults = '';
  	  this.editForm.keyword = '';
  	  this.deleteForm.keyword = '';
  	  this.deleteForm.maxResults = '';
    },
 	onSubmitDelete(evt) {
  		evt.preventDefault();
  		this.$refs.deleteBookModal.hide();
		  const payload = {
		    keyword: this.deleteForm.keyword,
		    maxResults: this.deleteForm.maxResults,
		  };
		  this.deleteBook(payload);
		  this.initForm();
		},
    onSubmitUpdate(evt) {
  		evt.preventDefault();
  		this.$refs.editBookModal.hide();
		  const payload = {
		    keyword: this.editForm.keyword,
		    maxResults: this.editForm.maxResults,
		  };
		  this.updateBook(payload);
		  this.initForm();
		},
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.addBookModal.hide();
      const payload = {
        keyword: this.addBookForm.keyword,
        maxResults: this.addBookForm.maxResults,
      };
      this.addChannel(payload);
      this.initForm();
    },
    onReset(evt) {
      evt.preventDefault();
      this.$refs.addBookModal.hide();
      this.initForm();
    },
   onResetUpdate(evt) {
	  evt.preventDefault();
	  this.$refs.editBookModal.hide();
	  this.initForm();
},
   onResetDelete(evt) {
	  evt.preventDefault();
	  this.$refs.deleteBookModal.hide();
	  this.initForm();
},
  },
};
</script>
