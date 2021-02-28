<template>
  <div class="b-admin__news">
    <div v-if="this.addForm" >
      <transition name="modal-fade">
        <div class="modal-ads-backdrop">
          <div class="modal-ads">
            <section class="modal-body">
              <button
                  type="button"
                  class="modal-ads-btn-close"
                  @click="close"
              >
                x
              </button>
              <slot name="body">
                <form  class="form" v-on:submit.prevent>
                  <input class="input" name="house" v-model="title"><label for="title" class="label">Заголовок</label>
                  <input  class="input" name="room" v-model="text"><label for="text" class="label">Текст новости</label>
                  <button class="button" @click="sendNews" v-on:submit.prevent>Добавить</button>
                </form>
              </slot>
            </section>
          </div>
        </div>
      </transition>
    </div>
    <div class="b-admin__news-add" @click="openForm">Добавить новость</div>
  <div class="news" v-for="item in this.newsListItem" :key="item.id">
    <div class="news-item">
      <div class="news-item__title">{{item.title}}</div>
      <div class="news-item__text">{{item.text}}</div>
      <div class="news-item__delete"  @click="deleteNews(item.id,item.title,item.text)">Удалить</div>
    </div>
  </div>
  </div>
</template>

<script>
import db from "@/firebaseinit";
import firebase from "firebase";

export default {
  name: "news-admin",
  data(){
    return{
      newsListItem:[],
      addForm:false,
      title:'',
      text:'',
      RoomCountId:0

    }

  },
  methods:{
    getNewsList(){
      db.collection('news').get().then
      (querySnapshot=>{
        querySnapshot.forEach(doc=>{

          // console.log(doc.data().adsList)
          doc.data().news.forEach(item=>{

            // eslint-disable-next-line no-unused-vars
            const data={
              id:item.id,
              title:item.title,
              text:item.text,
            }
            this.newsListItem.push(data)
          })
        })
      })

    },
    openForm(){
      this.addForm=true
    },
    deleteNews(id,title,text){
      let newsListItem = db.collection("news").doc("c7UoArCjeX4PCUZVy6rT");
      const deleteNews={id:id,title:title,text:text}
      return newsListItem.update({
        news: firebase.firestore.FieldValue.arrayRemove(deleteNews)

      })
          .then(() => {
            this.newsListItem = this.newsListItem.filter((item) => item.id !== id );
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
    },

    sendNews(){
        let ListNews = db.collection("news").doc("c7UoArCjeX4PCUZVy6rT");
        let newCountId=this.RoomCountId+1
        let  newItem= {
          id:newCountId,
          title:this.title,
          text:this.text,
        }
        return ListNews.update({
          news: firebase.firestore.FieldValue.arrayUnion(newItem)

        })
            .then(() => {
              //Modall Succsess
              this.addForm=false
              this.text=''
              this.title=''
              this.newsListItem.push(newItem)
              ListNews.update({
                CountId: firebase.firestore.FieldValue.increment(1)

              });


            })
            .catch((error) => {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
            });

    },
    close(){
      this.addForm=false
    },
    getCountId(){
      db.collection('news').get().then
      (querySnapshot=>{
        querySnapshot.forEach(doc=>{

          this.RoomCountId = doc.data().CountId

        })
      })
    }
  },
  created() {
    this.getNewsList()
    this.getCountId()
  },
}
</script>

<style lang="sass">
.b-admin
  &__news-add
    position: absolute
    padding: 10px
    border-radius: 10px
    text-align: right
    top: 10px
    right: 10px
    color: white
    background: #4a924a
      box-shadow: 3px 3px 2px 0 rgb(0 0 0 / 35%)

  &__news
    padding-top: 50px
    position: relative
    .news-item
      overflow: auto
      max-height: none
    .news-item__title
      margin-right: 75px
    .news-item__text
      text-overflow: initial
      max-height: none
      overflow: auto
      display: -webkit-box
      -webkit-line-clamp: 7

@media screen and (min-width: 768px)
  .b-admin
    &__news
      display: flex
      flex-wrap: wrap
      .news-item__title
        font-size: 16px
      .news-item__text
        font-size: 14px

</style>