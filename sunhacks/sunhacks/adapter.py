from allauth.account.adapter import DefaultAccountAdapter
from django.forms import ValidationError


class RestrictedEmailAdapter(DefaultAccountAdapter):
    def clean_email(self, email):
        RestrictedList = ['Your restricted list goes here.']
        if email in RestrictedList:
            raise ValidationError(
                'You are restricted from registering. Please contact admin.')
        return email
