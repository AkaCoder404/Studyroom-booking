# SCRUM
Here are notes about using the SCRUM framework, an implementation of the Agile methodology.

## Client Demands
Here is the client demands given.

### 自习座位预约系统
以高等学校日常学习生活为背景，通过信息技术手段实现一个自习室座位预约系统，提升各类自习室座位使用率。

关于系统学生端的实现: 
学生端可以选择在手机上实现(微信小程序)或在Web浏览器(Web应用)上实现。由于微信小程序的工作量会大些，并且更加接近实际的使用场景，会额外增加5%的分值。

#### 基本概念
自习室: 用于学生自习的场所，包括普通教室、图书馆的专用自习室以及其他区域的自习场地。自习室可以是学校统一管理的，也可以是属于院系的。对于属于院系的自习室只对本院系的同学开放。自习室的登记、注销、可用性维护由管理员统一管理。

自习座位: 自习室内登记在册的座位。有唯一编号，可按需预定。座位的登记、注销、可用性由管理员统一管理。

#### 原始需求

为了方便学生自习，学校开放了一批自习室。自习室中的座位利用率不高，经常出现一座难求，同时又有书包占座人却不在的情况。为了提升座位的利用率和周转率，学校一方面考虑动态调整自习室的数量，另一方面也希望采用信息技术手段提升座位的利用率。

通过自习座位预约系统，管理员可以设定可用的自习室以及开放时间。大部分自习室是早7点到晚10点开放（不排除将来有个别教室会通宵开放）。学生则可以查看可用自习室，并预约自习时间。为了提高座位利用率并考虑减少学生连续学习造成的疲劳，每次预约均以整点小时为单位，最多一次性预约4小时（系统参数可调）。

学生按预约到达座位后，需要有签到功能。自习教室屏幕上需要每天会显示一个动态的与教室关联的编码或者二维码，如果是通过Web应用签到，则录入编码，如果是微信签到，则扫描二维码。

在预约时间之前15分钟会有推送（邮件推送或微信服务号推送等）提醒；在预约时间之后10分钟如果还未签到，则会再次提醒；预约时间15分钟后如果还未签到，则自动取消预约、释放座位，并提醒学生，同时后台记录一次违约。

为了便于使用，学生需要能够方便地对所需的座位进行搜索，也可以查看历史预定并再次预定该座位。

管理员通过查看自习室和座位的预约情况来调整管理策略，提升资源利用率。

为了便于学生在线资料获取和学习，靠近固定插座或者移动导轨插座的座位有会有特殊标记，学生也可以在搜索时作为条件，以便学生携带电子设备使用。

## Epics and User Stories
A short review of what epics and user stories are
- User stories are short requirements or requests written from the perspective of an end user.
- Epics are large bodies of work that can be broken down into a number of smaller tasks (called stories).

Here is a list of user stories (not exhuastive and meant to change) that help capture the essential requirements and features for the study space reservation system.

### As a Student
1. **View Available Study Spaces**: As a student, I want to view all available study rooms and their open hours (mainly 7 AM to 10 PM) so that I can plan my study schedule accordingly.
2. **Reserve a Study Seat**: As a student, I need to be able to reserve a seat in a study room for up to 4 hours at a time, with the reservation starting on the hour, so I can ensure I have a place to study.
3. **Search for Seats with Power Outlets**: As a student with electronic devices, I want to search for seats near fixed or mobile power outlets so that I can use my devices without battery constraints.
4. **Sign In Upon Arrival**: As a student, I want to sign in to the study room by entering a code or scanning a QR code displayed on the study room's screen upon my arrival to validate my reservation.
5. **Receive Reservation Reminders**: As a student, I want to receive reminders 15 minutes before my reservation starts and notifications if I haven’t signed in within 10 minutes after my reservation begins, with an automatic cancellation and seat release if I don’t sign in within 15 minutes.
6. **View and Rebook Past Reservations**: As a student, I want to view my past seat reservations and easily rebook a seat I have used before for convenience.
7. **Receive Cancellation Notifications**: As a student, I need to be notified if my reservation is automatically cancelled due to non-arrival so I can make alternative arrangements.

### As a Professor
1. **Manage Study Rooms and Seats**: As an administrator, I need to register, deregister, and maintain the availability of study rooms and seats to ensure up-to-date information for students.
2. **Set and Adjust Reservation Parameters**: As an administrator, I want to set and adjust system parameters, such as maximum reservation length, to manage study space effectively and respond to changing needs.
3. **Monitor Reservation Status and Utilization**: As an administrator, I need to monitor the status and utilization of study rooms and seats to adjust availability and improve turnover rates.
4. **Access Violation Records**: As an administrator, I want to access records of reservation violations (e.g., no-shows) to identify patterns and potentially adjust policies or take corrective actions


## Scrum
### Roles
### Product Backlog Creation
### Spring Planning
### Spring Execution
### Sprint Review and Retrospective
### Repeat
The SCRUM team repeats this process, with each sprint building on the previous one, until the product meets the desired outcomes and is ready for release.

## Example
This example outlines how a SCRUM team might prioritize and tackle work in a sprint, using a product backlog tailored to developing a study space reservation system. 
### Example Product Backlog
### Example Sprint






