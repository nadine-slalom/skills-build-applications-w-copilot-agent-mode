from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class ModelTests(TestCase):
    def setUp(self):
        marvel = Team.objects.create(name='Marvel')
        ironman = User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel)
        Activity.objects.create(user=ironman, type='Running', duration=30)
        Workout.objects.create(user=ironman, description='Chest workout', calories=300)
        Leaderboard.objects.create(user=ironman, points=100)

    def test_user_creation(self):
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.first().name, 'Iron Man')

    def test_team_creation(self):
        self.assertEqual(Team.objects.count(), 1)
        self.assertEqual(Team.objects.first().name, 'Marvel')

    def test_activity_creation(self):
        self.assertEqual(Activity.objects.count(), 1)
        self.assertEqual(Activity.objects.first().type, 'Running')

    def test_workout_creation(self):
        self.assertEqual(Workout.objects.count(), 1)
        self.assertEqual(Workout.objects.first().description, 'Chest workout')

    def test_leaderboard_creation(self):
        self.assertEqual(Leaderboard.objects.count(), 1)
        self.assertEqual(Leaderboard.objects.first().points, 100)
