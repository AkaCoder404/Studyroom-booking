# API Documentation
There are two endpoints.

```
api/users
api/bookings
```

## Users
### 登记
```
api/users/login
```
通过username和password登记。Headers中获取authToken.

### 用户信息
```
api/users/profile
```
通过authToken获取用户信息。


## Booking
### 预约列表
```
api/bookings
```
获取所有预约

### 房间列表
```
api/bookings/rooms
```
通过authToken获取房间信息。

### 房间预约历史列表
```
api/bookings/bookingHistory
```
通过authToken获取个人预约历史


### 位置预约
```
api/bookings/bookseat
```
通过authoToken预约一个seat


### 取消预约
```
api/bookings/cancelBooking
```
通过authToken取消预约

