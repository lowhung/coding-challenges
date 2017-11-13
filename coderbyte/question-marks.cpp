#include <iostream>
using namespace std;


/**
 * QuestionsMarks - check if there are exactly 3 question marks between every pair of two numbers that === 10
 *                  also if there aren't two numbers then return false
 * @param  {string} str string of single digit numbers, letters and question marks
 * @return {boolean}    true or false based on conditions above
 */
bool QuestionsMarks(string str) {
  int count = 0;
  for (int i = 0; i < str.length(); i++)
    cout << str[i];
    cout << "\n";
    if (!str[i].compare("?"))
      count++;

    else if (!str[i].compare("[0-9]"))
      cout << str[i];
    else
      cout << "Fuck";
  return false;

}

int main() {

  // keep this function call here
  // cout << QuestionsMarks(gets(stdin));
  cout << QuestionsMarks("aa6?9"); // => false
  cout << "\n";
  cout << QuestionsMarks("acc?7??sss?3rr1??????5"); // => true
  return 0;

}
