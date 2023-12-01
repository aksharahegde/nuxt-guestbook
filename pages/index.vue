<script setup lang="ts">
const toast = useToast()
const { loggedIn, user } = useUserSession()
const { data: comments } = await useFetch('/api/comments')

const otherComments = computed(() => comments.value?.filter((c) => c.author !== user.value?.username))
const userComment = computed(() => comments.value?.find((c) => c.author === user.value?.username))
const userCommentBody = ref(userComment.value?.body || '')
const editing = ref(userCommentBody.value === '')

async function saveComment() {
  if (!userCommentBody.value.trim()) {
    return
  }
  editing.value = false
  await $fetch('/api/comment', {
    method: 'PUT',
    body: {
      body: userCommentBody.value
    }
  })
  .then(() => {
    toast.add({
      title: 'Comment saved.'
    })
  })
  .catch(err => {
    editing.value = true
    toast.add({
      title: 'An error occured',
      description: err.message,
      color: 'red'
    })
  })
}
</script>

<template>
  <UPageBody>
    <UPageColumns>
      <UPageCard v-if="!loggedIn" class="text-center">
        <UButton icon="i-simple-icons-github" color="black" to="/auth/github" external>
          Login to comment
        </UButton>
      </UPageCard>
      <UPageCard v-else @dblclick="editing = true">
        <UButton v-if="!editing" icon="i-heroicons-pencil" color="gray" variant="ghost" class="absolute top-2 right-2" @click="editing = true" />
        <UTextarea v-if="editing" v-model="userCommentBody" :rows="3" autofocus autoresize />
        <q v-else class="text-gray-500 dark:text-gray-400">{{ userCommentBody }}</q>
        <div class="flex items-center gap-2 mt-4">
          <UAvatar :src="`https://github.com/${user.username}.png`" :alt="user.username" size="md" />
          <div class="flex items-center justify-between w-full">
            <span class="font-semibold">{{ user.username }}</span>
            <UButton v-if="editing" icon="i-heroicons-document-text" color="green" variant="soft" @click="saveComment" />
          </div>
        </div>
      </UPageCard>
      <UPageCard v-for="comment of otherComments" :key="comment.id" :to="`https://github.com/${comment.author}`" target="_blank">
        <q class="text-gray-500 dark:text-gray-400">{{ comment.body }}</q>
        <div class="flex items-center gap-2 mt-4">
          <UAvatar :src="`https://github.com/${comment.author}.png`" :alt="comment.author" size="md" />
          <span class="font-semibold">{{ comment.author }}</span>
        </div>
      </UPageCard>
    </UPageColumns>
  </UPageBody>
</template>
