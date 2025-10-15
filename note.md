```typescript
type AuthStackParamList = {
  Login: undefined;
  Register: undefined;

  // Màn hình Profile CẦN userId
  Profile: {
    userId: string;
    username?: string; // optional param
  };

  // Màn hình Detail CẦN courseId
  CourseDetail: {
    courseId: number;
    title: string;
  };

  // Màn hình Settings có thể có hoặc không có params
  Settings:
    | {
        mode?: 'dark' | 'light';
      }
    | undefined;
};
```

```typescript
// ✅ Đúng
navigation.navigate('Profile', {
  userId: '123',
  username: 'John',
});

// ✅ Đúng - username là optional
navigation.navigate('Profile', {
  userId: '123',
});

// ❌ Sai - thiếu userId (required)
navigation.navigate('Profile', {
  username: 'John',
}); // TypeScript báo lỗi!

// ✅ Đúng
navigation.navigate('CourseDetail', {
  courseId: 456,
  title: 'React Native',
});

// ✅ Settings - có thể có params hoặc không
navigation.navigate('Settings');
navigation.navigate('Settings', { mode: 'dark' });
```
