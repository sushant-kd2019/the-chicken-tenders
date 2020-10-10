from allauth.account.adapter import DefaultAccountAdapter


class AccountAdapter(DefaultAccountAdapter):
    def save_user(self, request, user, form, commit=True):
        data = form.cleaned_data
        user.username = data['username']
        user.email = data['email']
        user.first_name = data['first_name']
        user.last_name = data['last_name']
        user.nationality = data['nationality']
        user.gender = data['gender']
        user.institute = data['institute']
        user.avatar = data['avatar']
        if 'password1' in data:
            user.set_password(data['password1'])
        user.save()
        return user
