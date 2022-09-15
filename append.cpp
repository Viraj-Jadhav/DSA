#include <stdio.h>
#include <iostream>
#include <string.h>
using namespace std;
int main()
{
    char a[] = "viraj";
    char b[] = "vish";
    // b.append(a.substr(0, 2));
    // cout << b;
    // int len = a.size();
    // cout << len;
    strcat(a, b);
    cout << a;
    return 0;
}