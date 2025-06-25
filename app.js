var app = angular.module("studentApp", []);

app.controller("StudentController", function ($scope) {
  $scope.students = [];
  $scope.student = {};

  $scope.addStudent = function () {
    if ($scope.student.name && $scope.student.marks) {
      $scope.students.push({
        name: $scope.student.name,
        marks: parseFloat($scope.student.marks),
      });
      $scope.student = {}; // clear form
    }
  };

  $scope.removeStudent = function (index) {
    $scope.students.splice(index, 1);
  };

  $scope.getAverage = function () {
    if ($scope.students.length === 0) return 0;
    var total = 0;
    $scope.students.forEach(function (s) {
      total += s.marks;
    });
    return (total / $scope.students.length).toFixed(2);
  };
});
