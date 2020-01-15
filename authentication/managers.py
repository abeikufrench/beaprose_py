from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    """
    Design a model manager for User model with no username field
    """

    use_in_migrations = True

    def _create_user(self, email, password, **kwargs):
        """Create and save user with the given email and password"""
        if not email:
            raise ValueError("The given email must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user

    
    def create_user(self, email, password=None, **kwargs):
        kwargs.setdefault("is_staff", False)
        kwargs.setdefault("is_superuser", False)
        return self._create_user(email, password, **kwargs)

    
    def create_superuser(self, email, password, **kwargs):
        """Create and save a superuser with the given email and password"""
        kwargs.setdefault("is_staff", True)
        # kwargs.setdefault("is_admin", True)
        kwargs.setdefault("is_superuser", True)
        # kwargs.setdefault("is_active", True)

        if kwargs.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff set to True")
        if kwargs.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser set to True")
        # if kwargs.get("is_active") is not True:
        #     raise ValueError("Superuser must have is_active set to True")
        
        return self._create_user(email, password, **kwargs)