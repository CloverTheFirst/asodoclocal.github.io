#include <iostream>
using namespace std;

// Fonction pour obtenir le i-ème caractère de la liste
char getChar(int i) {
    char chars[] = {'a', 'b', 'c', 'd'};
    return chars[i];
}

int main() {
    int i;

    for (i = 0; i < 4; i++) {
        cout << getChar(i) << " 1" << endl;
    }

    return 0;
}

hadoop jar /usr/local/hadoop/share/hadoop/tools/lib/hadoop-streaming-3.1.2.jar
-files mapper.py,reducer.py -mapper mapper.py -reducer reducer.py
-input /data/miserables -output wc
