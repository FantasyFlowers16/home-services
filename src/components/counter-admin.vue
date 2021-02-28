<template>
  <div>
    <h3 class="b-counter__title">Данные счетчиков воды. Февраль 2021.</h3>
    <table class="b-counter__table">
      <tr>
        <th>ФИО</th>
        <th>Улица</th>
        <th>Дом</th>
        <th>Квартира</th>
        <th>ХВ</th>
        <th>ГВ</th>
        <th>Удалить обработанные данные</th>

      </tr>
      <tr v-for="item in counterListItem" :key="item.id">
        <td>{{item.fio}}</td>
        <td>{{item.street}}</td>
        <td>{{item.house}}</td>
        <td>{{item.room}}</td>
        <td>{{item.dataHot}}</td>
        <td>{{item.dataCold}}</td>
        <td @click="deleteCount(item.id,item.fio,item.street,item.house,item.room,item.dataHot,item.dataCold)">X</td>

      </tr>
    </table>

  </div>
</template>

<script>
import db from "@/firebaseinit";
import firebase from "firebase";

export default {
  name: "counter-admin",
  data() {
    return {
      counterListItem:[],
    };
  },
  methods:{
    deleteCount(id,fio,street,house,room,dataHot,dataCold){
      let counterListItem = db.collection("counter").doc("4ZwmsUtEeIjQ5YIbvUYJ");
      const deleteItem={id:id,fio:fio,street:street,house:house,room:room,dataHot:dataHot,dataCold:dataCold}
      console.log(deleteItem)
      return counterListItem.update({
        counterList:firebase.firestore.FieldValue.arrayRemove(deleteItem)

      })
          .then(() => {
            console.log("Document successfully updated!");
            // this.adsListItem.splice(id, 1);
            // this.OpenModal()
            this.counterListItem = this.counterListItem.filter((item) => item.id !== id );
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
    }
  },
  created() {
    db.collection('counter').get().then
    (querySnapshot=>{
      querySnapshot.forEach(doc=>{

        // console.log(doc.data().adsList)
        doc.data().counterList.forEach(item=>{

          // eslint-disable-next-line no-unused-vars
          const data={
            id:item.id,
            fio:item.fio,
            street:item.street,
            house:item.house,
            room:item.room,
            dataHot:item.dataHot,
            dataCold:item.dataCold
          }
          this.counterListItem.push(data)
        })
      })
    })

  },
}
</script>

<style lang="sass">
.b-counter
  &__table
    width: 100%
    th,td
      padding: 10px
    th
      text-align: end
      padding-left: 30px
    td
      &:last-child
        color: #a72222
        padding-left: 30px
        cursor: pointer
        text-align: end

    tr
      &:nth-child(2n)
        background: #9dc5d6
        color: white


</style>