from allauth.account.adapter import DefaultAccountAdapter


class AccountAdapter(DefaultAccountAdapter):
    def save_user(self, request, user, form, commit=True):
        data = form.cleaned_data
        user.name = data['name']
        user.first_name = data['first_name']
        user.last_name = data['last_name']
        user.nationality = data['nationality']
        user.gender = data['gender']
        user.institute = data['institute']
        user.avatar = data['avatar']
        user.email = data['email']
        if 'password1' in data:
            user.set_password(data['password1'])
        user.save()
        return user
