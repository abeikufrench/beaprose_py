from authentication.models import (
    User,
    Expert, 
    Newsletter,
    ExpertProfile,
    Keyword,
    Sector,
    WorkHistory,
    Skill,
    BillingCard
)

from django.db import transaction

from rest_framework import serializers

class UserListingField(serializers.RelatedField):
    def to_representation(self, value):
        ret = {
            "email": str(value),
            "profile_photo": value.profile_photo.name,
            "id": value.pk
        }
        return ret


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "dob",
            "dob",
            "marital_status",
            "profile_photo",
            "phoneNumber",
            "phoneNumberVerified",
            "is_expert",
            "is_customer",
            "is_influencer",
        ]


class ExpertSerializer(serializers.ModelSerializer):
    # user = serializers.StringRelatedField()
    user = UserListingField(read_only=True)
    class Meta:
        model = Expert
        fields = ["user"]


class KeywordSerializer(serializers.ModelSerializer):

    class Meta:
        model = Keyword
        fields = ["keyword"]


class SectorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sector
        fields = ["sector"]


class WorkHistorySerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkHistory
        fields = [
            "job_title",
            "country_work",
            "city_work",
            "role",
            "start_date",
            "end_date"
        ]


class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Skill
        fields = ["skill"]


class ExpertProfileSerializer(serializers.ModelSerializer):
    keywords = KeywordSerializer(many=True)
    sectors = SectorSerializer(many=True)
    work_history = WorkHistorySerializer(many=True)
    skills = SkillSerializer(many=True)

    class Meta:
        model = ExpertProfile
        fields = [
            "headline",
            "short_bio",
            "keywords", # need serializer for this
            "sectors", # need serializer for this
            "work_history", # need serializer for this
            "skills", # need serializer for this
            "timezone",
            "country",
            "city",
            "skype_number",
            "rate_per_hour",
            "is_long_term",
            "is_pro_bono"
        ]


class PaymentCardSerializer(serializers.ModelSerializer):

    class Meta:
        model = BillingCard
        fields = [
            "card_number",
            "card_name",
            "cvc",
            "expiry"
        ]


class ExpertAllSerializer(serializers.ModelSerializer):
    """
    Serializer for all fields of expert serializer
    """
    profile = ExpertProfileSerializer()

    @transaction.atomic
    def update(self, instance, validated_data):
        print(validated_data)
        profile = validated_data.pop("profile")
        keywords = profile.pop("keywords")
        sectors = profile.pop("sectors")
        work_history = profile.pop("work_history")
        skills = profile.pop("skills")
        print(keywords, sectors, work_history, skills)

        return instance

    class Meta:
        model = Expert
        fields = [
            "id",
            "profile",  # don't add anymore
        ]

class NewsletterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Newsletter
        fields = ["email"]