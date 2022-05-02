<template>
  <section class="py-16">
    <div class="max-w-screen-lg mx-auto px-3 grid gap-12">
      <h2 class="text-3xl font-bold text-center mx-auto">Contact</h2>
      <div class="shadow-[0_5px_25px_-3px_rgba(0,0,0,0.1)] rounded-xl p-6 xs:p-12 grid md:flex gap-8 bg-white">
        <div class="w-max flex flex-col gap-4 lg:gap-12">
          <div class="flex gap-4">
            <img class="w-10 h-10" src="@/assets/icon-telephone.svg" alt="">
            <div>
              <p class="text-lg font-bold">Tel :</p>
              <a class="text-blue-600" href="tel:+33625306813">06 25 30 68 13</a>
            </div>
          </div>
          <div class="flex gap-4">
            <img class="w-10 h-10" src="@/assets/icon-email.svg" alt="">
            <div>
              <p class="text-lg font-bold">Email :</p>
              <a class="text-blue-600 " href="mailto:erwan.decoster.pro@gmail.com">erwan.decoster.pro@gmail.com</a>
            </div>
          </div>
        </div>
        <form @submit.prevent="submit" class="grid md:grid-cols-2 gap-4 grow" novalidate="true">
          <div class="md:col-span-2 grid gap-2">
            <div v-show="errors.length">
              <ul class="grid gap-2">
                <li v-for="error in errors" v-bind:key="error" @click="errors.splice(errors.indexOf(error), 1)" class="bg-red-200 px-2 py-1 rounded duration-200">{{ error }}</li>
              </ul>
            </div>
            <div v-if="messageSend">
              <p class="bg-green-200 px-2 py-1 rounded duration-200" @click="messageSend = false">Message envoyé avec succès</p>
            </div>
          </div>
          <div class="grid gap-2">
            <label for="name">Nom :</label>
            <input class="px-2 py-1 border-2 rounded-lg border-blue-600 transition duration-200 outline outline-transparent outline-offset-1 outline-2 focus:outline-blue-600" type="text" id="name" name="name" autocomplete="name" v-model="name">
          </div>
          <div class="grid gap-2">
            <label for="email">Email :</label>
            <input class="px-2 py-1 border-2 rounded-lg border-blue-600 transition duration-200 outline outline-transparent outline-offset-1 outline-2 focus:outline-blue-600" type="text" id="email" name="email" autocomplete="email" v-model="email">
          </div>
          <div class="grid gap-2">
            <label class="relative" for="tel">Tel : <span class="text-xs absolute pl-1 -top-1">optionnel</span></label>
            <input class="px-2 py-1 border-2 rounded-lg border-blue-600 transition duration-200 outline outline-transparent outline-offset-1 outline-2 focus:outline-blue-600" type="text" id="tel" name="tel" autocomplete="tel" v-model="tel">
          </div>
          <div class="grid gap-2">
            <label for="objet">Objet :</label>
            <input class="px-2 py-1 border-2 rounded-lg border-blue-600 transition duration-200 outline outline-transparent outline-offset-1 outline-2 focus:outline-blue-600" type="text" id="objet" name="objet" autocomplete="off" v-model="object">
          </div>
          <div class="grid md:col-span-2 ">
            <label for="message">Message :</label>
            <textarea class="px-2 py-1 border-2 rounded-lg border-blue-600 transition duration-200 outline outline-transparent outline-offset-1 outline-2 focus:outline-blue-600 h-32 min-h-[8em]" name="message" id="message" v-model="message"></textarea>
          </div>
          <input type="submit" value="Envoyer" class="md:col-span-2 ml-auto cursor-pointer px-5 py-2 bg-blue-600 shadow-md shadow-blue-600/50 hover:shadow-none transition duration-200 text-white rounded-xl flex items-center w-fit">
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import smtp from '@/customeScript/smtp';

export default {
  data() {
    return {
      errors: [],
      messageSend: false,
      name: null,
      email: null,
      tel: null,
      object: null,
      message: null,
    };
  },
  methods: {
    checkForm() {
      if (this.name && this.email && this.validEmail(this.email) && this.object && this.message && !(this.message.length <= 20) && !this.messageSend) {
        this.errors = [];
        return true;
      }
      console.log(this.messageSend);
      this.errors = [];
      if (this.messageSend) {
        this.errors.push('Le message a déjà été envoyé attendais quelques secondes.');
      }
      if (!this.name) {
        this.errors.push('Le champ Nom doit être rempli.');
      }
      if (!this.email) {
        this.errors.push('Le champ Email doit être rempli.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Une adresse email valide est requise.');
      }
      if (!this.object) {
        this.errors.push('Le champ Object doit être rempli.');
      }
      if (!this.message) {
        this.errors.push('Le champ Message doit être rempli.');
      } else if (this.message.length <= 20) {
        this.errors.push('Le champ Message doit contenir plus de 20 caractères.');
      }
      return false;
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    submit() {
      if (!this.checkForm()) {
        return;
      }
      this.sendEmail();
    },
    sendEmail() {
      smtp.send({
        Host: 'smtp.gmail.com',
        Username: 'wanerd2@gmail.com',
        Password: 'qjgwacsljxwhykjr',
        // Host: 'smtp.hostinger.com',
        // Username: 'website@erwan-decoster.com',
        // Password: 'CDBFPhK8QDib!4f',
        To: 'wanerd2@gmail.com',
        From: 'website@erwan-decoster.com',
        Subject: `Site - ${this.name} - ${this.object}`,
        Body: `<html><h2>${this.name} - </h2><p style="font-size: 14px; margin: 0;"><strong>email : ${this.email}</strong></p><p style="font-size: 14px; margin: 0;"><strong>tel : ${this.tel}</strong></p><br></br><pre style="font-size: 14px;  margin: 0;"><strong>message : </strong><br>${this.message}</pre></html>`,
      }).then(
        (message) => this.verifEmailSending(message),
      );
    },
    verifEmailSending(message) {
      if (message === 'OK') {
        this.messageSend = true;
        localStorage.name = '';
        localStorage.email = '';
        localStorage.tel = '';
        localStorage.object = '';
        localStorage.message = '';
        this.name = '';
        this.email = '';
        this.tel = '';
        this.object = '';
        this.message = '';
        // eslint-disable-next-line
        setTimeout(() => {
          this.messageSend = false;
          this.errors = [];
        }, 10000);
      } else {
        this.errors.push('Une erreur durant l\'envoi est survenue, réessayée !');
      }
    },
  },
  mounted() {
    console.log(this.tel);
    // this.tel.addEventListener('input', () => {
    //   this.tel = this.tel.replace(/(\d{2})/gm, '$1 ');
    // });
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
    if (localStorage.tel) {
      this.tel = localStorage.tel;
    }
    if (localStorage.object) {
      this.object = localStorage.object;
    }
    if (localStorage.message) {
      this.message = localStorage.message;
    }
    document.querySelector('#tel').addEventListener('input', (e) => {
      if (e.target.value.slice(-1) > 0 || e.target.value.value.slice(-1) < 9) {
        e.target.value = e.target.value.replace(/\s\s+|\.|-/g, '');
        e.target.value = e.target.value.replace(/\D/g, '').replace(/(\d{2})/gm, '$1 ');
      }
    });
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
    email(newEmail) {
      localStorage.email = newEmail;
    },
    tel(newTel) {
      // this.tel = this.tel.replace(/\s\s+|\.|-/g, '').replace(/(\d{2})/gm, '$1 ');
      localStorage.tel = newTel;
    },
    object(newObject) {
      localStorage.object = newObject;
    },
    message(newMessage) {
      localStorage.message = newMessage;
    },
  },
};
</script>
