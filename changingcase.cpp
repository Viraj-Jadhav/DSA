#include <iostream>
#include <stdio.h>
using namespace std;
int main()
{
    cout << "enter string" << endl;
    char a[10];
    cin >> a;
    // char a[];
    int i;
    for (i = 0; a[i] != '\0'; i++)
    {
        a[i] = a[i] + 32;
    }
    printf("%s", a);
    // cout << a;
}